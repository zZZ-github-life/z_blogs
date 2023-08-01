package online.zzzzzzz.basics.servlet;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.Socket;

/**
 * @author zZZ.... <br/>
 * @description <br/>
 * @date 2023/7/24$  <br/>
 */
//@WebServlet("/chat")
public class ChatServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try(ServletOutputStream out = resp.getOutputStream(); Socket socket = new Socket("",45248)) {
            resp.setContentType("text/event-stream");
            resp.setCharacterEncoding("UTF-8");



        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("post");
        super.doGet(req, resp);
    }
}
