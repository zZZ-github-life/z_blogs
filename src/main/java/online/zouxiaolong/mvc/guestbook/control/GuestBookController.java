package online.zouxiaolong.mvc.guestbook.control;

import online.zouxiaolong.basics.entity.Page;
import online.zouxiaolong.basics.entity.RepJson;
import online.zouxiaolong.mvc.guestbook.dao.entity.BlogGuestBook;
import online.zouxiaolong.mvc.guestbook.service.GuestBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * @author zZZ....
 * @description 留言板
 * @date 2022/3/14
 */
@Controller
@RequestMapping("/GuestBookController")
public class GuestBookController {
    
    @Autowired
    private GuestBookService guestBookService;
    
    
    @ResponseBody
    @RequestMapping(value = "/list")
    public RepJson list(@RequestBody Page<BlogGuestBook> pageData) {
        
        RepJson repJson = new RepJson();
        try {
            Page<BlogGuestBook> list = guestBookService.list(pageData);
            int pageTopCount = guestBookService.findPageTopCount(pageData);
            repJson.setData(list);
            repJson.setMsg(pageTopCount+"");
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
            repJson.setMsg(e.getMessage());
            
        }
        return repJson;
    }
    
    
    @ResponseBody
    @RequestMapping("/save")
    public RepJson save(BlogGuestBook blogGuestBook) {
        
        RepJson repJson = new RepJson();
        try {
            if ("-1".equals(blogGuestBook.getParentId()+"")){
                blogGuestBook.setParentIds(",-1");
            }else {
                BlogGuestBook blogGuestBook1 = guestBookService.selectById(blogGuestBook.getParentId());
                blogGuestBook.setParentIds(blogGuestBook1.getParentIds()+","+blogGuestBook.getParentId());
            }
            blogGuestBook.setCreateDate(new Date());
           guestBookService.insert(blogGuestBook);
           repJson.setData(blogGuestBook);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
            repJson.setMsg(e.getMessage());
        }
        return repJson;
    }
    
}
