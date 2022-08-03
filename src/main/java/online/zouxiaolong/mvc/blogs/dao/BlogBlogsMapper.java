package online.zouxiaolong.mvc.blogs.dao;

import online.zouxiaolong.basics.mapper.Mapper;
import online.zouxiaolong.mvc.blogs.dao.entity.BlogBlogs;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * @author zZZ....
 * @description
 * @date 2022/4/25
 */
@Repository
public interface BlogBlogsMapper extends Mapper<BlogBlogs> {
    
    List<Map<String,Object>> getListByParam(Map<String,Object> map);
    
    Integer getCountByParam(Map<String, Object> map);
    
}
