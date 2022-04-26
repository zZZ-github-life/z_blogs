package online.zouxiaolong.basics.entity;

import java.util.List;

/**
 * @author zZZ....
 * @description 分页组件
 * @date 2022/3/9
 */
public class Page<T> {
    
    //当前页
    protected Integer currentPage;
    
    //mysql查询页
    protected Integer start;
    
    //每页条数
    protected Integer pageSize;
    
    //是否第一页
    protected boolean firstPage;
    
    //是否最后一页
    protected boolean lastPage;
    
    //总条数
    protected Integer total;
    
    //总页数
    protected Integer totalPage;
    
    //结果集合
    List<T> list ;
    
    //查询参数
    T p  ;
    
    public Integer getStart() {
        try {
            if (this.currentPage!=null){
                if (this.currentPage<=0)
                    this.start=0;
                else
                    this.start=(this.currentPage-1)*this.pageSize;
            }else this.start=0;
        }catch (Exception e){
            this.start=0;
        }
        
        return this.start;
    }
    
    public void setStart(Integer start) {
        this.start = start;
    }
    
    public Integer getPageSize() {
        if (pageSize!=null){
            if (pageSize<=0)
                pageSize=10;
        }else pageSize=10;
        return pageSize;
    }
    
    public void setPageSize(Integer pageSize) {
        
        this.pageSize = pageSize;
    }
    
    public boolean isFirstPage() {
        
        return firstPage;
    }
    
    public void setFirstPage(boolean firstPage) {
        
        this.firstPage = firstPage;
    }
    
    public boolean isLastPage() {
        
        return lastPage;
    }
    
    public void setLastPage(boolean lastPage) {
        
        this.lastPage = lastPage;
    }
    
    public Integer getTotal() {
        
        return total;
    }
    
    public void setTotal(Integer total) {
        totalPage =   total % pageSize == 0 ?  total / pageSize : total / pageSize + 1;
        if(currentPage<=1){
            firstPage=true;
        }
        if (totalPage.equals(currentPage)){
            lastPage=true;
        }
        this.total = total;
    }
    
    public Integer getCurrentPage() {
        
        return currentPage;
    }
    
    public void setCurrentPage(Integer currentPage) {
        
        this.currentPage = currentPage;
    }
    
    public Integer getTotalPage() {
        
        return totalPage;
    }
    
    public void setTotalPage(Integer totalPage) {
        
        this.totalPage = totalPage;
    }
    
    public List<T> getList() {
        
        return list;
    }
    
    public void setList(List<T> list) {
        
        this.list = list;
    }
    
    public T getP() {
        
        return p;
    }
    
    public void setP(T p) {
        
        this.p = p;
    }
    
}
