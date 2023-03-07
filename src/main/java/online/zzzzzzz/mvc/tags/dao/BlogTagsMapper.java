package online.zzzzzzz.mvc.tags.dao;


import online.zzzzzzz.basics.mapper.Mapper;
import online.zzzzzzz.mvc.tags.dao.entity.BlogTags;
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
    
    List<BlogTags> getAll();
    
    
}
