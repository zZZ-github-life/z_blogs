package online.zouxiaolong.basics.entity;

/**
 * @author zZZ....
 * @description
 * @date 2022/3/9
 */
public abstract class BaseEntity {
    

    protected Page<BaseEntity> page;
    
    public Page<BaseEntity> getPage() {
        
        return page;
    }
    
    public void setPage(Page<BaseEntity> page) {
        
        this.page = page;
    }
    
}
