package online.zouxiaolong.basics.service;


import online.zouxiaolong.basics.mapper.Mapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * @description 基础的service ，减少冗余代码
 * @author  zZZ....
 * @date  2021-07-25
    @param <M> mapper的实现类
  * @param <T> 对应的实体类
 */

public abstract class BaseService<M extends Mapper<T>,T>{
    
    
    protected Logger log = Logger.getLogger(this.getClass());
    
    @Autowired
    private M mapper;
    
    public int delete(Integer id){
      return  mapper.delete(id);
    }
    
    
    public int insert(T t){
        return mapper.insert(t);
    }
    
    public int update(T t){
        return mapper.update(t);
    }
    
    public T selectById(Integer id){
        return mapper.selectById(id);
    }
    
    public List<T> findPageWithResult(T t){
        return mapper.findPageWithResult(t);
    }
    
    public Integer findPageWithCount(T t){
        return mapper.findPageWithCount(t);
    }
    
}
