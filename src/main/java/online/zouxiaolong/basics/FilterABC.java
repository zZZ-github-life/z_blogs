package online.zouxiaolong.basics;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @description 全局跨域处理
 * @author  zZZ....
 * @date  2021-07-25
 */
@WebFilter("/*")
public class FilterABC implements Filter {
    
    public void init(FilterConfig filterConfig) throws ServletException {
    
    }
    
    public void doFilter(ServletRequest servletRequest, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
       
        ((HttpServletResponse)response).setHeader("Access-Control-Allow-Origin", "*");
        ((HttpServletResponse)response).setHeader("Access-Control-Allow-Headers", "*");
        ((HttpServletResponse)response).setHeader("Access-Control-Allow-Methods", "*");
        filterChain.doFilter(servletRequest,response);
    
    
        
    
    }
    
    public void destroy() {
    
    }
    
}
