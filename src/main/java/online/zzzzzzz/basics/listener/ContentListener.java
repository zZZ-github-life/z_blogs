package online.zzzzzzz.basics.listener;

import online.zzzzzzz.basics.exception.MsgException;
import online.zzzzzzz.comment.Global;
import org.apache.log4j.PropertyConfigurator;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
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
            String path = Objects.requireNonNull(Global.class.getClassLoader().getResource("properties/blog.properties")).getPath();
            System.out.println(path);
            Global.cusProperties.setProperty("article.num", String.valueOf(Global.atomicInteger.get()));
            Global.cusProperties.store(new OutputStreamWriter(Files.newOutputStream(Paths.get(path))),"article.num");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
}
