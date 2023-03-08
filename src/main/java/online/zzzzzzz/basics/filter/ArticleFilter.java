package online.zzzzzzz.basics.filter;

import online.zzzzzzz.comment.Constant;
import online.zzzzzzz.comment.Global;
import online.zzzzzzz.mvc.blogs.dao.BlogBlogsMapper;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * @author zZZ....
 * @description 监控文章热点
 * @date 2023/3/8
 */
@WebFilter("/html/article/page/*")
public class ArticleFilter implements Filter {
    
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    
    }
    
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
    
        Global.singleThreadExecutor.execute(() -> {
            try {
                BlogBlogsMapper bm = (BlogBlogsMapper)Global.getBean("blogBlogsMapper");
                String href =((HttpServletRequest) servletRequest).getServletPath();
                bm.articleHits(href);
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
