package online.zzzzzzz.basics.mapper;

import online.zzzzzzz.basics.entity.Page;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * @description 基础的dao映射，减少之后每个mapper的代码冗余
 * @author  zZZ....
 * @date  2021-07-25
 * @param <T> 对应实体类
 */

public interface Mapper<T> {
    
    int delete(Integer id);
    
    int insert(T t);
    
    int update(T t);
    
    T selectById(Integer id);
    
    List<T> findPageWithResult(Page<T> p);
    
    Integer findPageWithCount(Page<T> p);
    
    /**
     * 动态sql
     */
    @Select("${selectSQL}")
    T selectSQL(@Param("selectSQL") String selectSQL);
    
    @Insert("${insertSQL}")
    int insertSQL(@Param("insertSQL") String insertSQL);
    
    @Update("${updateSQL}")
    int updateSQL(@Param("updateSQL") String updateSQL);
    
    @Delete("${deleteSQL}")
    int deleteSQL(@Param("deleteSQL") String deleteSQL);
    
}
