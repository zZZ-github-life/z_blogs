package online.zzzzzzz.mvc.sys.dao;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * @author zZZ....
 * @description
 * @date 2022/12/24
 */
@Repository
public interface SysMapper {

    @Select("select * from blog_Statistics")
    List<Map<String,Object>> getAll();
    
    @Insert("insert into blog_Statistics(name ,num) value(#{name},#{num}) ON DUPLICATE KEY UPDATE num = #{num}")
    void insertOrUpdate(@Param("name")String name,@Param("num")String num);
    
    @Select("select sum(words) sum from blog_blogs ")
    Integer getWC();

    @Select("select * from privacy")
    List<Map<String,String>> getConfig();
}
