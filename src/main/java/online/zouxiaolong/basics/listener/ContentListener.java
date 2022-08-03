package online.zouxiaolong.basics.listener;

import online.zouxiaolong.basics.exception.MsgException;
import online.zouxiaolong.comment.Cus_Global;
import online.zouxiaolong.mvc.blogs.control.BlogBlogsController;
import org.apache.log4j.PropertyConfigurator;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.Objects;
import java.util.Properties;


@WebListener
public class ContentListener implements ServletContextListener {
    /**
     * @description 加载log4j日志
     * @author  zZZ....
     * @date  2021-07-25
     */
    @Override
    public void contextInitialized(ServletContextEvent sce) {
        try{
            InputStream resourceAsStream = ContentListener.class.getClassLoader().getResourceAsStream("properties/log4j.properties");
            Properties properties = new Properties();
            properties.load(resourceAsStream);
            PropertyConfigurator.configure(properties);
        }catch (IOException e){
            e.printStackTrace();
            throw new  MsgException("log4j日志初始化失败.....");
        }
       
    
    }
    
    /**
     * 存储properties到配置文件
     * @param sce
     */
    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        
        try {
            String path = Objects.requireNonNull(Cus_Global.class.getClassLoader().getResource("/properties/blog.properties")).getPath();
            System.out.println(path);
            Cus_Global.cusProperties.setProperty("article.num", Cus_Global.atomicInteger.get()+"");
            Cus_Global.cusProperties.store(new OutputStreamWriter(new FileOutputStream(path)),"article.num");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
}
