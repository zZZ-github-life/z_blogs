package online.zzzzzzz.mvc.tools.dao;

import online.zzzzzzz.basics.mapper.Mapper;
import online.zzzzzzz.mvc.tools.dao.entity.BlogTools;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * @author zZZ....
 * @description
 * @date 2022/3/8
 */
@Repository
public interface ToolsMapper extends Mapper<BlogTools> {
    
    List<Map> getNumAndName();
    
    List<BlogTools> getAll();
    
    @Update("update blog_tools set heap = heap+1 where id =#{id}")
    int heap(Integer id);
}
