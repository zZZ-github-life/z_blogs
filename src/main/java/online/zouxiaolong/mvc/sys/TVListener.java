package online.zouxiaolong.mvc.sys;

import online.zouxiaolong.basics.listener.InitResource;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

/**
 * @author zZZ....
 * @description tv计算
 * @date 2022/12/27
 */
@WebListener
public class TVListener implements HttpSessionListener {
    
    @Override
    public void sessionCreated(HttpSessionEvent se) {
        InitResource.TV.incrementAndGet();
    }
}
