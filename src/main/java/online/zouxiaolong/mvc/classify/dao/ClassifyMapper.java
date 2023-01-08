package online.zouxiaolong.mvc.classify.dao;

import online.zouxiaolong.basics.mapper.Mapper;
import online.zouxiaolong.mvc.classify.dao.entity.BlogClassify;
import org.apache.ibatis.annotations.Select;
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
    
    @Select("select * from blog_classify ")
    List<BlogClassify> getAll();
    
}
