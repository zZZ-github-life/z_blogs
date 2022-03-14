package online.zouxiaolong.mvc.tags.service;


import online.zouxiaolong.basics.service.BaseService;
import online.zouxiaolong.mvc.tags.dao.BlogTagsMapper;
import online.zouxiaolong.mvc.tags.dao.entity.BlogTags;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @author zZZ....
 * @description
 * @date 2022/3/8
 */
@Service
public class TagsService extends BaseService<BlogTagsMapper, BlogTags> {
    
    public List<Map> getNumAndName() {
        return mapper.getNumAndName();
    }
    
}
