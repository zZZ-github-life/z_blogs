package online.zouxiaolong.mvc.classify.service;

import online.zouxiaolong.basics.service.BaseService;
import online.zouxiaolong.mvc.classify.dao.ClassifyMapper;
import online.zouxiaolong.mvc.classify.dao.entity.BlogClassify;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @author zZZ....
 * @description
 * @date 2022/3/8
 */
@Service
public class ClassifyService extends BaseService<ClassifyMapper, BlogClassify> {
    
    public List<Map> getNumAndName() {
        return mapper.getNumAndName();
    }
    
}
