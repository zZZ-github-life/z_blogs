package online.zzzzzzz.mvc.chat;

import online.zzzzzzz.comment.Constant;
import online.zzzzzzz.comment.Tools;
import org.apache.commons.lang3.StringUtils;

import javax.servlet.AsyncContext;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.Socket;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author zZZ.... <br/>
 * @description <br/>
 * @date 2023/7/24$  <br/>
 */
//@WebServlet(urlPatterns = "/chat/subscribe",asyncSupported=true)
public class ChatServlet extends HttpServlet {

    private final static ConcurrentHashMap<String, SSEEntryProcessor> chat =new ConcurrentHashMap<>();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String cookieValue;//利用cookie，检查是否同源
        if (StringUtils.isBlank(cookieValue = Tools.getCookieValue(request, Constant.CHATCOOKIE))
                || chat.get(Constant.CHATCOOKIE)!=null //不存在表示不同源，集合中已经存在了说明已经建立了链接。
                || chat.containsKey(cookieValue)){
            return ;
        }

            response.setContentType("text/event-stream");
            response.setCharacterEncoding("UTF-8");
            response.setHeader("Cache-Control", "no-cache");
            response.setHeader("Connection", "keep-alive");
            SSEEntryProcessor sseEmitter = new SSEEntryProcessor(0);
            chat.put(cookieValue,sseEmitter);
            // 启动异步上下文
            final AsyncContext asyncContext = request.startAsync();
            asyncContext.start(sseEmitter);


    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //chat.get("")
    }
}
