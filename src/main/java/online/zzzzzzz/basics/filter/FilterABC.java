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
@WebFilter(urlPatterns = "/*",dispatcherTypes = {DispatcherType.ASYNC,DispatcherType.REQUEST},asyncSupported = true)
public class FilterABC implements Filter {
    
    private String[] ref ={"http://127.0.0.1/","http://localhost/", Constant.DOMAIN};

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    
    }
    
    public void doFilter(ServletRequest servletRequest, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = ((HttpServletRequest) servletRequest);
     //   StringBuffer requestURL = request.getRequestURL();
//        if (!requestURL.toString().contains("/chat")){  //SSE聊天 建立连接时 直接调用会抛出异常
//            request.getSession();//对应  online.zouxiaolong.basics.filter.TVListener
//        }
        request.getSession();//对应  online.zouxiaolong.basics.filter.TVListener
       // response.setCharacterEncoding("UTF-8");

        filterChain.doFilter(servletRequest,response);

//        String referer = request.getHeader("referer");
//        if(null != referer && loyal(referer)){
//            filterChain.doFilter(servletRequest,response);
//        }else {
//            request.getRequestDispatcher("/").forward(servletRequest, response);
//        }
    }

    @Override
    public void destroy() {
    
    }
    
    public boolean loyal(String referer){
    
        for (String s : ref) {
            if (referer.startsWith(s)) return true;
        }
        return false;
    }
}
