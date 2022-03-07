package online.zouxiaolong.basics.controller;

import org.apache.log4j.Logger;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * @description 基础控制层，封装常用方法
 * @author  zZZ....
 * @date 2021-07-25
 */
public abstract class BaseController {

  
    
    protected Logger log = Logger.getLogger(this.getClass());
    

    protected void sendHtml(HttpServletResponse response,String html) throws IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter writer = response.getWriter();
        writer.write(html);
    }
    
    protected void ajax(HttpServletResponse response,String responseBody) throws IOException{
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().print(responseBody);
        
    }
}
