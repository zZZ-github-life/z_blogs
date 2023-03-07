package online.zzzzzzz.basics.servlet;

import online.zzzzzzz.comment.Global;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileInputStream;
import java.io.IOException;

/**
 * @description 全局文件下载/预览接口，待深入
 * @author  zZZ....
 * @date  2021-07-25
 *
 */

@WebServlet("/downLoadFile/*")
public class DownLoadFile extends HttpServlet {
    
    
    
    
    public void downLoadFile(HttpServletRequest request,HttpServletResponse response){
        String requestURI = request.getRequestURI();
        try{
            String pa="/downLoadFile";
            requestURI = requestURI.substring(requestURI.indexOf(pa)+pa.length());
            FileInputStream fis = new FileInputStream(Global.fileRootPath()+requestURI);
            response.setContentType("image/jpeg;charset=UTF-8");
            response.setHeader("Cache-Control","public,max-age=31536000");
            ServletOutputStream outputStream = response.getOutputStream();
            byte[] bytes = new byte[1024*10];
            int len;
            while ((len=fis.read(bytes))!=-1){
                outputStream.write(bytes);
            }
            outputStream.flush();
            outputStream.close();
        }catch (Exception e){
        
            String[] s={};
            s= new String[]{"4", "5"};
        }
        
    
    }
    
    
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    
        downLoadFile(req,resp);
    }
    
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    
        downLoadFile(req,resp);
        
    }
    
}
