package online.zouxiaolong.basics.listener;

import online.zouxiaolong.basics.exception.MsgException;
import org.apache.log4j.PropertyConfigurator;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * @description 加载log4j日志
 * @author  zZZ....
 * @date  2021-07-25
 */
@WebListener
public class ContentListener implements ServletContextListener {
    
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
    
}
