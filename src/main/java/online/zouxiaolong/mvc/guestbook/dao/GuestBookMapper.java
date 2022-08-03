package online.zouxiaolong.mvc.guestbook.dao;

import online.zouxiaolong.basics.entity.Page;
import online.zouxiaolong.basics.mapper.Mapper;
import online.zouxiaolong.mvc.guestbook.dao.entity.BlogGuestBook;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author zZZ....
 * @description
 * @date 2022/3/14
 */
@Repository
public interface GuestBookMapper extends Mapper<BlogGuestBook> {
    
     List<BlogGuestBook> findPageTop(Page<BlogGuestBook> page);
     
     List<BlogGuestBook> findChildrenByTop(String parentId);
     
     int findPageTopCount(Page<BlogGuestBook> page);
     
     List<BlogGuestBook> getListById(Integer id);
     
     List<BlogGuestBook> getListTopParent(Integer id);
     List<BlogGuestBook> getChildById(Integer id);
     List<BlogGuestBook> getParentById(Integer id);
    
     Integer getTopParentId(Integer id);
     
     Integer recycle(Integer id);
}
