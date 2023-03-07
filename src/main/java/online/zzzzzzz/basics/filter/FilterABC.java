package online.zzzzzzz.basics.filter;

import online.zzzzzzz.comment.Constant;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * @description 全局跨域处理
 * @author  zZZ....
 * @date  2021-07-25
 */
@WebFilter("/*")
public class FilterABC implements Filter {
    
    private String[] ref ={"http://127.0.0.1/","http://localhost/", Constant.DOMAIN};
    
    public void init(FilterConfig filterConfig) throws ServletException {
    
    }
    
    public void doFilter(ServletRequest servletRequest, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = ((HttpServletRequest) servletRequest);
        request.getSession();//对应  online.zouxiaolong.basics.filter.TVListener
        filterChain.doFilter(servletRequest,response);
        
//        String referer = request.getHeader("referer");
//        if(null != referer && loyal(referer)){
//            filterChain.doFilter(servletRequest,response);
//        }else {
//            request.getRequestDispatcher("/").forward(servletRequest, response);
//        }
    }
    
    public void destroy() {
    
    }
    
    public boolean loyal(String referer){
    
        for (String s : ref) {
            if (referer.startsWith(s)) return true;
        }
        return false;
    }
}
