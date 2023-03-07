package online.zzzzzzz.mvc.classify.service;

import online.zzzzzzz.basics.service.BaseService;
import online.zzzzzzz.mvc.classify.dao.ClassifyMapper;
import online.zzzzzzz.mvc.classify.dao.entity.BlogClassify;
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
