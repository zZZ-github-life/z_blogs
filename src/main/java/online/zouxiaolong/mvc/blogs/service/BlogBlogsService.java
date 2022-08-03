package online.zouxiaolong.mvc.blogs.service;

import com.overzealous.remark.Remark;
import online.zouxiaolong.basics.service.BaseService;
import online.zouxiaolong.comment.Cus_Global;
import online.zouxiaolong.comment.Tools;
import online.zouxiaolong.mvc.blogs.control.BlogBlogsController;
import online.zouxiaolong.mvc.blogs.dao.BlogBlogsMapper;
import online.zouxiaolong.mvc.blogs.dao.entity.BlogBlogs;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author zZZ....
 * @description
 * @date 2022/5/18
 */

@Scope(proxyMode = ScopedProxyMode.TARGET_CLASS)
@Service
public class BlogBlogsService extends BaseService<BlogBlogsMapper, BlogBlogs> {
    
    private static String date  =  new SimpleDateFormat("yyyyMMdd").format(new Date()) ;
    
    public Map<String,Object> adminList(Map<String,Object> map){
    
        HashMap<String, Object>  hashMap = new HashMap<>();
        List<Map<String, Object>> listByParam = mapper.getListByParam(map);
        Integer count = mapper.getCountByParam(map);
        hashMap.put("list",listByParam);
        hashMap.put("count",count);
    
        return hashMap;
    }
    
    
    
    @Transactional
    public void generateArticle(BlogBlogs blogBlogs){
        if (blogBlogs.getId()==null){
        
            String date = new SimpleDateFormat("yyyyMMdd").format(new Date());
            if (!BlogBlogsService.date.equals(date)){
                Cus_Global.atomicInteger.set(0);
            }
            int andAdd = Cus_Global.atomicInteger.getAndAdd(1);
            blogBlogs.setHref("/blogs/html/article/"+date+"/"+andAdd+".html");
        }else {
            Remark remark = new Remark();
            String  md = remark.convert(blogBlogs.getContentHtml());
            blogBlogs.setContentMd(md);
        }
        blogBlogs.setContent(Tools.convert(blogBlogs.getContentHtml()));
    
        save(blogBlogs);
    }
    

    
    
    
}
