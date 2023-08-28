package online.zzzzzzz.mvc.chat;

import online.zzzzzzz.basics.entity.RepJson;
import online.zzzzzzz.basics.listener.InitResource;
import online.zzzzzzz.comment.*;
import online.zzzzzzz.mvc.door.Role.Role;
import online.zzzzzzz.mvc.door.service.DoorService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.Socket;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.text.ParseException;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author zZZ.... <br/>
 * @description  <br/>
 * @date 2023/7/24$  <br/>
 */
@RestController
@RequestMapping("/chat")
public class ChatController {


    public static  Timer timer;
    private final static ConcurrentHashMap<String,SseEmitterImpl> chat =new ConcurrentHashMap<>();



    @Autowired
    private DoorService doorService;


    //客户端心跳检查，用于释放断开的链接
     static {
        timer=  new Timer();
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                try {
                    if (chat.size()>0){
                        Enumeration<String> keys = chat.keys();
                        while (keys.hasMoreElements()){
                            SseEmitter sseEmitter = chat.get(keys.nextElement());
                            if (sseEmitter!=null){
                                sseEmitter.send(SseEmitter.event().name("heartbeat").data("1").id("1"));
                            }
                        }
                    }

                }catch (Exception e){
                    e.printStackTrace();
                }
            }
        },6000,6*1000);

    }

    /**
     * 与客户端建立连接
     * @param request res
     * @return SseEmitter
     */
    @GetMapping(value = "/subscribe", produces = MediaType.TEXT_EVENT_STREAM_VALUE )
    public SseEmitter subscribe(HttpServletRequest request, HttpServletResponse response){
        String cookieValue;//利用cookie，检查是否同源
        if (StringUtils.isBlank(cookieValue = Tools.getCookieValue(request,Constant.CHATCOOKIE))
            //    || chat.get(Constant.CHATCOOKIE)!=null //不存在表示不同源，集合中已经存在了说明已经建立了链接。
              //  || chat.containsKey(cookieValue)
        ){
            return null;
        }


      //  response.setHeader("Content-Type","text/event-stream;charset=UTF-8");


        SseEmitterImpl existSSE = chat.get(cookieValue);

        if (existSSE!=null)existSSE.complete();

        SseEmitterImpl sseEmitter = new SseEmitterImpl(30*60*1000);

        chat.put(cookieValue,sseEmitter);

        sseEmitter.onCompletion(() -> chat.remove(cookieValue));

        sseEmitter.onError(throwable -> chat.remove(cookieValue));

        sseEmitter.onTimeout(() -> chat.remove(cookieValue));

        return sseEmitter;
    }


    @PostMapping("/send")
    public RepJson send1(@RequestBody Map<String,String> map, HttpServletRequest request) throws IOException, ParseException {
        String cookieValue = Tools.getCookieValue(request,Constant.CHATCOOKIE);//利用cookie，检查是否同源
        SseEmitter sseEmitter ;
        String content = map.get("content");

        //限制同源和内容长度
        if (StringUtils.isBlank(cookieValue) || (sseEmitter=chat.get(cookieValue))==null
                || StringUtils.isBlank(content=content.trim()) || content.length()>76

        ){
            return null;
        }

        //限制访问次数
        String uuid = UUID.randomUUID().toString();
        String ipAddress = IPUtils.getIpAddress(request);
        RepJson allowAcc = doorService.isAllowAcc(ipAddress, Role.chat);
        if (!allowAcc.isSuccess()){
            sseEmitter.send(SseEmitter.event().name("receive").data("已经到达最大的聊天次数，明天再来吧").id(uuid));
            sseEmitter.send(SseEmitter.event().name("over").data(0).id(uuid));
            return null;
        }

       try(Socket socket = new Socket(InitResource.config.get("chat.ip"), Integer.parseInt(InitResource.config.get("chat.port")));
            OutputStream outputStream = socket.getOutputStream();
            InputStream inputStream = socket.getInputStream()) {

            socket.setSoTimeout(120*1000);

            outputStream.write(("V"+content+"\r\n\r\n").getBytes(StandardCharsets.UTF_8));
            outputStream.flush();


            String line;
            BufferedReader br = new BufferedReader( new InputStreamReader(inputStream));
            while ((line=br.readLine())!=null){
                sseEmitter.send(SseEmitter.event().name("receive").data(line.replaceAll("\\\\n","<br>")).id(uuid));
            }
            sseEmitter.send(SseEmitter.event().name("over").id(uuid));
        }catch (Exception e){
            e.printStackTrace();
        }

       // sseEmitter.send(SseEmitter.event().name("receive").data( UUID.randomUUID().toString()).id( UUID.randomUUID().toString()));
        return null;

    }

    /**
     * 接受客户端的发送消息  ,弃用，过于繁琐
     * @param map json
     * @param request request
     * @return 200
     */
 //   @PostMapping("/send")
    public RepJson send(@RequestBody Map<String,String> map, HttpServletRequest request){
        String cookieValue = Tools.getCookieValue(request,Constant.CHATCOOKIE);//利用cookie，检查是否同源
        SseEmitter sseEmitter ;
        if (StringUtils.isBlank(cookieValue) || (sseEmitter=chat.get(cookieValue))==null){
            return null;
        }
        RepJson repJson = new RepJson();
        try(  Socket socket = new Socket("",45248)) {
            socket.setSoTimeout(120*1000);
            OutputStream outputStream = socket.getOutputStream();

            loginProxy(outputStream);

            send(outputStream,map.get("content"));

            String line;
            String uuid = UUID.randomUUID().toString();
            InputStream inputStream = socket.getInputStream();

            int len;
            byte[] emptyBytes = BytesList.getEmptyBytes();
            BytesList bytesList = new BytesList();
            while ((len=inputStream.read(emptyBytes))!=-1){
                bytesList.addAll(emptyBytes,len);
            }
            byte[] decrypt = AES.decrypt(bytesList.getBytes());
            String data = new String(decrypt);

            sseEmitter.send(SseEmitter.event().name("receive").data(data).id(uuid));

            sseEmitter.send(SseEmitter.event().name("over").id(uuid));

        }catch (Exception e){
            e.printStackTrace();
           // sseEmitter.completeWithError(e);
        }

        return repJson;

    }



    private void loginProxy(OutputStream outputStream) throws IOException,
            IllegalBlockSizeException, BadPaddingException, InvalidKeyException {
        String token= Protocols.First.username+
                Protocols.Three.username +
                Protocols.Three.separator +
                Protocols.First.password+
                Protocols.Three.password +
                Protocols.Three.separator ;
        byte[] encipher = AES.encipher(token.getBytes(StandardCharsets.UTF_8));
        outputStream.write(encipher);
        outputStream.write(Protocols.Two.end);
    }

    private void send(OutputStream outputStream,String content)throws IOException,
            IllegalBlockSizeException, BadPaddingException, InvalidKeyException{

        String http= Protocols.First.url+ "https://api.openai.com/v1/chat/completions"+
                Protocols.Three.separator +
                Protocols.First.method+"POST"+
                Protocols.Three.separator +
                Protocols.First.isHttps +"y"+
                Protocols.Three.separator +
                Protocols.First.body+"{\"model\":\"gpt-3.5-turbo\",\"messages\":[{\"role\": \"user\",\"content\": \"" +content+"\"}]}"+
                Protocols.Three.separator +
                Protocols.First.heard+"Authorization"+Protocols.First.hSeparator+"Bearer "+ InitResource.config.get("openAi.chat") +
                Protocols.Three.separator +
                Protocols.First.heard+"Content-Type"+Protocols.First.hSeparator+"application/json"+
                Protocols.Three.separator +
                Protocols.First.heard+"Accept"+Protocols.First.hSeparator+"application/json"+
                Protocols.Three.separator ;
        byte[] encipher = AES.encipher(http.getBytes(StandardCharsets.UTF_8));
        outputStream.write(encipher);
        outputStream.write(Protocols.Two.end);
    }


    static class SseEmitterImpl extends SseEmitter{
        public SseEmitterImpl(long timeout){
            super(timeout);
        }
        public SseEmitterImpl(){
            super();
        }
        @Override
        protected void extendResponse(ServerHttpResponse outputMessage) {
            super.extendResponse(outputMessage);
            HttpHeaders headers = outputMessage.getHeaders();
            headers.setContentType(new MediaType(MediaType.TEXT_EVENT_STREAM,StandardCharsets.UTF_8));
        }
    }
}
