package online.zouxiaolong.mvc.sys;

import online.zouxiaolong.basics.listener.InitResource;

import javax.servlet.*;
import javax.servlet.annotation.WebListener;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author zZZ....
 * @description 用户访问人数统计
 * @date 2022/12/27
 */
@WebListener("/html")
public class UVFilter implements Filter {
    
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    
    }
    
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        boolean b =true;
        Cookie[] cookies = ((HttpServletRequest) servletRequest).getCookies();
        for (Cookie cookie : cookies) {
            if ("UV".equals(cookie.getName())){
                b=false;
            }
        }
        if (b){
            Cookie cookie = new Cookie("UV", "UV");
            cookie.setHttpOnly(true);
            cookie.setMaxAge(30*24*60*60);
            ((HttpServletResponse)servletResponse).addCookie(cookie);
            InitResource.UV.incrementAndGet();
        }
        filterChain.doFilter(servletRequest,servletResponse);
        
    }
    
    @Override
    public void destroy() {
    
    }
    
}
