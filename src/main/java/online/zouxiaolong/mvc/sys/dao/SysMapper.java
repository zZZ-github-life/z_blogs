package online.zouxiaolong.mvc.sys.dao;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.Map;

/**
 * @author zZZ....
 * @description
 * @date 2022/12/24
 */
@Repository
public interface SysMapper {

    @Select("select * from blog_Statistics")
    Map<String,Object> getAll();
    
    @Insert("inert into blog_Statistics(name ,num) value(#{name},#{num}) ON DUPLICATE KEY UPDATE num = #{num}")
    void insertOrUpdate(@Param("name")String name,@Param("num")String num);
    
    
}
