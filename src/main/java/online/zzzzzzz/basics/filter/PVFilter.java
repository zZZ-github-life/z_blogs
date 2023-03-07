package online.zzzzzzz.basics.filter;

import online.zzzzzzz.basics.listener.InitResource;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;

/**
 * @author zZZ....
 * @description 浏览量PV 统计
 * @date 2022/12/22
 */
@WebFilter("*.html")
public class PVFilter implements Filter {
    
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    
    }
    
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        InitResource.PV.incrementAndGet();
        filterChain.doFilter(servletRequest,servletResponse);
        
    }
    
    @Override
    public void destroy() {
    
    }
    
}
