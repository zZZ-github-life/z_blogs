package online.zouxiaolong.mvc.guestbook.control;

import com.alibaba.fastjson.JSONObject;
import online.zouxiaolong.basics.entity.Page;
import online.zouxiaolong.basics.entity.RepJson;
import online.zouxiaolong.mvc.guestbook.dao.entity.BlogGuestBook;
import online.zouxiaolong.mvc.guestbook.service.GuestBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import java.util.Date;
import java.util.HashMap;
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
    
    /**
     * 博客展示页接口
     * @param pageData 参数
     * @return 二级树形
     */
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
            
        }
        return repJson;
    }
    
    /* -- ------------ ------------ ------------ ------------留言管理后台 分割线 -------- ------------ ------------ ------------ --*/
    
    /**
     * 管理后台获取留言列表，按照时间倒排
     * @param pageData 参数
     * @return 列表
     */
    @ResponseBody
    @RequestMapping("adminList")
    public RepJson adminList(@RequestBody Page<BlogGuestBook> pageData) {
        
        RepJson repJson = new RepJson();
        try {
            List<BlogGuestBook> pageWithResult = guestBookService.findPageWithResult(pageData);
            Integer count = guestBookService.findPageWithCount(pageData);
            pageData.setList(pageWithResult);
            pageData.setTotal(count);
            repJson.setData(pageData);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
    
    /**
     * 根据id获取当前留言所在的树叉
     * @param id id
     * @return 树杈
     */
    @ResponseBody
    @RequestMapping("getComment")
    public RepJson getComment(Integer id) {
        
        RepJson repJson = new RepJson();
        HashMap<String,Object> map = new HashMap<>();
        try {
            Integer topParentId = guestBookService.getTopParentId(id);
            BlogGuestBook myself = guestBookService.selectById(id);
            map.put("myself",myself);
            if (topParentId!=null){
                BlogGuestBook top  = guestBookService.selectById(topParentId);
                List<BlogGuestBook> siblings = guestBookService.getChildById(topParentId);
                List<BlogGuestBook> child = guestBookService.getChildById(id);
                for (int i = 0; i < siblings.size(); i++) {
                    BlogGuestBook guestBook = siblings.get(i);
                    for (BlogGuestBook blogGuestBook : child) {
                        if (guestBook.getId().equals(blogGuestBook.getId())) {
                            siblings.remove(i--);
                        }
                    }
                    if (guestBook.getId().equals(id)){
                        siblings.remove(i--);
                    }
                }
                map.put("top",top);
                map.put("siblings",siblings);
                map.put("child",child);
                repJson.setData(map);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
            
        }
        return repJson;
    }
    
    /**
     * 根据id标记留言已读
     * @param id id
     * @return 结果
     */
    @ResponseBody
    @RequestMapping("isRead")
    public RepJson isRead(Integer[] id) {
        
        RepJson repJson = new RepJson();
        try {
            for (Integer integer : id) {
                BlogGuestBook blogGuestBook = new BlogGuestBook();
                blogGuestBook.setReadi(true);
                blogGuestBook.setId(integer);
                guestBookService.update(blogGuestBook);
            }
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
    
    /**
     * 放入回收站
     * @param id 包含 当前id下的树杈
     * @return 结果
     */
    @ResponseBody
    @RequestMapping("recycle")
    public RepJson recycle(Integer id) {
        
        RepJson repJson = new RepJson();
        try {
            Integer recycle = guestBookService.recycle(id);
            repJson.setData(recycle);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
}
