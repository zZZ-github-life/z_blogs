package online.zzzzzzz.basics.filter;

import online.zzzzzzz.comment.Tools;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author zZZ....
 * @description 设置文案
 * @date 2023/2/9
 */
@WebFilter("/html/article/primary/*")
public class PoetryFilter implements Filter {
    
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    
    }
    
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
    
        boolean poetry = Tools.cookieIsExist((HttpServletRequest) servletRequest, "poetry");
        if (!poetry){
            Cookie cookie = new Cookie("poetry", "poetry");
            cookie.setHttpOnly(true);
            ((HttpServletResponse)servletResponse).addCookie(cookie);
        }
        filterChain.doFilter(servletRequest,servletResponse);
    }
    
    @Override
    public void destroy() {
    
    }
    
}
