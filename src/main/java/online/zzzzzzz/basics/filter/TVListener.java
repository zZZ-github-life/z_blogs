package online.zzzzzzz.basics.filter;

import online.zzzzzzz.basics.listener.InitResource;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

/**
 * @author zZZ....
 * @description 总访问量tv 计算
 * @record  session的创建问题.需要手动调用 HttpServletRequest.getSession()
 * @Class  online.zouxiaolong.basics.filter.FilterABC
 * @date 2022/12/27
 */
@WebListener
public class TVListener implements HttpSessionListener {
    
    /**
     * sessionId第一次产生是在直到某server端程序调用 HttpServletRequest.getSession(true)这样的语句时才被创建。
     * @param se 监听session
     */
    @Override
    public void sessionCreated(HttpSessionEvent se) {
        InitResource.TV.incrementAndGet();
    }
    
    /**
     * 超时；程序调用HttpSession.invalidate()；程序关闭；
     * @param se  监听session
     */
    @Override
    public void sessionDestroyed(HttpSessionEvent se) {
        HttpSession session = se.getSession();
        System.out.println("session正在销毁，ID为："+session.getId());
    }
    
}
