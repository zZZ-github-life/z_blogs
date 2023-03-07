package online.zzzzzzz.basics.entity;

/**
 * @author zZZ....
 * @description
 * @date 2022/3/9
 */
public abstract class BaseEntity {
    
    protected Integer id;

    protected Page<BaseEntity> page;
    
    public Page<BaseEntity> getPage() {
        
        return page;
    }
    
    public void setPage(Page<BaseEntity> page) {
        
        this.page = page;
    }
    
    public Integer getId() {
        
        return id;
    }
    
    public void setId(Integer id) {
        
        this.id = id;
    }
    
}
