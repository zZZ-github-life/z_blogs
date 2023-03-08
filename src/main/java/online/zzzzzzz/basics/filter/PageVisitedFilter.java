package online.zzzzzzz.basics.filter;

import online.zzzzzzz.comment.Global;
import online.zzzzzzz.comment.IPUtils;
import online.zzzzzzz.mvc.blogs.dao.BlogBlogsMapper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.context.ContextLoaderListener;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * @author zZZ....
 * @description 博客站点页面访问统计
 * @date 2023/2/12
 */
@WebFilter("/html/article/*")
public class PageVisitedFilter  implements Filter {
    
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    
    }
    
    
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
    
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        
    
        Global.singleThreadExecutor.execute(() -> {
            try {
                String uri = request.getRequestURI();
                String browserName = Global.getBrowserName(request.getHeader("User-Agent"));
                final String[] city ={"other"};
                BlogBlogsMapper blogBlogsMapper = (BlogBlogsMapper)ContextLoaderListener.getCurrentWebApplicationContext().getBean("blogBlogsMapper");
                IPUtils.process(searcher -> {
                    String ipAddress = IPUtils.getIpAddress(request);
                    String search = searcher.search(ipAddress);
                    String[] split = search.split("\\|");
                    city[0] = split[2].replace("省","").replace("市","");
        
                });
    
                blogBlogsMapper.pageview(StringUtils.isBlank(uri)?"other":uri,browserName,city[0]);
            }catch (Exception e){
                e.printStackTrace();
            }
           
        });
        
        filterChain.doFilter(servletRequest,servletResponse);
    }
    
    
    @Override
    public void destroy() {
    
    }
    
}
