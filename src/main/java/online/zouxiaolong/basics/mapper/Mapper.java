package online.zouxiaolong.basics.mapper;

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
    
    List<T> findPageWithResult(T t);
    
    Integer findPageWithCount(T t);
    
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
