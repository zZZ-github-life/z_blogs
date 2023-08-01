package online.zzzzzzz.comment;



import java.io.*;
import java.net.Socket;
import java.nio.charset.StandardCharsets;

/**
 *
 */
public class ChatGPTProxy {

      private static Socket socket ;

      private static OutputStream os;
      private static InputStream is;


      private void init(){
          try {
              if (socket==null|| socket.isClosed()|| socket.isInputShutdown() || socket.isOutputShutdown()){
                  socket = new Socket("192.227.146.241",5248);
                  os = socket.getOutputStream();
                  is=socket.getInputStream();
                  //封装用户密码，登录
                  String token= Protocols.First.username+
                                  Protocols.Three.username +
                                  Protocols.Three.separator +
                                  Protocols.First.password+
                                  Protocols.Three.password +
                                  Protocols.Three.separator ;
                  byte[] encipher = AES.encipher(token.getBytes(StandardCharsets.UTF_8));
                  os.write(encipher);
                  os.write(Protocols.Two.end);
              }
          }catch (Exception e){
              e.printStackTrace();
          }
      }



    public Socket getSocket(){
        init();
        return socket;
    }

    public OutputStream getOS(){
        init();
        return os;
    }

    public InputStream getIS(){
        init();
        return is;
    }


    public static void main(String[] args) throws Exception{
        Socket socket1 = new Socket("127.0.0.1", 1080);
        OutputStream outputStream = socket1.getOutputStream();

        new Thread(() -> {
            try {
                InputStream inputStream = socket1.getInputStream();
                byte[] bytes = new byte[1024];
                int len ;
                while ((len=inputStream.read(bytes))!=-1){
                    System.out.println(new String(bytes,0,len));
                }
            }catch (Exception e){
                e.printStackTrace();
            }
        }).start();

        outputStream.write("hahahahhahahah".getBytes(StandardCharsets.UTF_8));
        outputStream.write("hahahahhahahah".getBytes(StandardCharsets.UTF_8));
        outputStream.write("hahahahhahahah".getBytes(StandardCharsets.UTF_8));
        outputStream.write("hahahahhahahah".getBytes(StandardCharsets.UTF_8));
        outputStream.write("hahahahhahahah".getBytes(StandardCharsets.UTF_8));
        outputStream.write("hahahahhahahah".getBytes(StandardCharsets.UTF_8));
        outputStream.write("hahahahhahahah".getBytes(StandardCharsets.UTF_8));
        outputStream.write("hahahahhahahah".getBytes(StandardCharsets.UTF_8));
        outputStream.write("hahahahhahahah".getBytes(StandardCharsets.UTF_8));

    }

}
