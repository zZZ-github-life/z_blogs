package online.zouxiaolong.mvc.tags.dao;


import online.zouxiaolong.basics.mapper.Mapper;
import online.zouxiaolong.mvc.tags.dao.entity.BlogTags;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * @author zZZ....
 * @description 标签页
 * @date 2022/3/13
 */
@Repository
public interface BlogTagsMapper extends Mapper<BlogTags> {
    
    List<Map> getNumAndName();
    
    @Select("select * from blog_tags")
    List<BlogTags> getAll();
    
    
}
