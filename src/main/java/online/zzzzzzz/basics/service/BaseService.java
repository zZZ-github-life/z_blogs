package online.zzzzzzz.basics.service;


import online.zzzzzzz.basics.entity.BaseEntity;
import online.zzzzzzz.basics.entity.Page;
import online.zzzzzzz.basics.mapper.Mapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * @description 基础的service ，减少冗余代码
 * @author  zZZ....
 * @date  2022-02-25
    @param <M> mapper的实现类
  * @param <T> 对应的实体类
 */

public abstract class BaseService<M extends Mapper<T>,T>{
    
    
    protected Logger log = Logger.getLogger(this.getClass());
    
    @Autowired
    protected M mapper;
    
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
    
    public int save(T t){
        if (((BaseEntity)t).getId() == null){
          return   insert(t);
        }else {
          return   update(t);
        }
    }
    
    public List<T> findPageWithResult(Page<T> p){
        return mapper.findPageWithResult(p);
    }
    
    public Integer findPageWithCount(Page<T> p){
        return mapper.findPageWithCount(p);
    }
    
}
