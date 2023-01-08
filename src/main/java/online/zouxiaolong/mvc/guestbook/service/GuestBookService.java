package online.zouxiaolong.mvc.guestbook.service;

import online.zouxiaolong.basics.entity.Page;
import online.zouxiaolong.basics.service.BaseService;
import online.zouxiaolong.mvc.guestbook.dao.GuestBookMapper;
import online.zouxiaolong.mvc.guestbook.dao.entity.BlogGuestBook;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author zZZ....
 * @description 留言板
 * @date 2022/3/14
 */
@Service
public class GuestBookService extends BaseService<GuestBookMapper, BlogGuestBook> {
    
    /**
     * 分页 封装二级树形留言列表
     * @param page
     * @return
     */
    
    public Page<BlogGuestBook>  list(Page<BlogGuestBook> page) {
    
        Integer count = mapper.findPageTopCount(page);
        List<BlogGuestBook> topList = mapper.findPageTop(page); //集合过大时会严重 影响 下面循环执行效率，待优化
        for (BlogGuestBook blogGuestBook : topList) {
            blogGuestBook.setgBChildren(mapper.findChildrenByTop("%,"+blogGuestBook.getId()+"%"));
        }
        page.setList(topList);
        page.setTotal(count);
        return page;
    }
    
    public int findPageTopCount(Page<BlogGuestBook> page) {
        return mapper.findPageTopCount(page);
    }
    public List<BlogGuestBook> getListById(Integer id){
        return mapper.getListById(id);
    }
    public List<BlogGuestBook> getListTopParent(Integer id){
        return mapper.getListById(id);
    }
    public List<BlogGuestBook> getChildById(Integer id){
        return mapper.getChildById(id);
    }
    public Integer getTopParentId(Integer id){
        return mapper.getTopParentId(id);
    }
    public Integer recycle(Integer id){
        return mapper.recycle(id);
    }
}
