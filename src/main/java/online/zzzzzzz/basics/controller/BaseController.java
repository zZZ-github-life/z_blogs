package online.zzzzzzz.basics.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Validator;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;



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
    
    //设置分页参数
    protected void setPageSize(Map<String,Object> map){
        if (map.get("start")!=null){
            int size = Integer.parseInt(map.get("pageSize").toString());
            int start = Integer.parseInt(map.get("start").toString());
            
            if (size<=0)
                size=10;
            
            if (start<=0)
                start=0;
            else
                start=(start-1)*size;
            
            map.put("pageSize",size);
            map.put("start",start);
        }else if (map.get("currentLines")!=null){
            int size = Integer.parseInt(map.get("pageSize").toString());
            int start = Integer.parseInt(map.get("currentLines").toString());
    
            if (size<=0)
                size=10;
    
            if (start<=0)
                start=0;
           
    
            map.put("pageSize",size);
            map.put("start",start);
        }
    }



}
