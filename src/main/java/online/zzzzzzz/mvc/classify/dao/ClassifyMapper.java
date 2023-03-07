package online.zzzzzzz.mvc.classify.dao;

import online.zzzzzzz.basics.mapper.Mapper;
import online.zzzzzzz.mvc.classify.dao.entity.BlogClassify;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * @author zZZ....
 * @description
 * @date 2022/3/8
 */
@Repository
public interface ClassifyMapper extends Mapper<BlogClassify> {
    
    List<Map> getNumAndName();
    
    List<BlogClassify> getAll();
    
}
