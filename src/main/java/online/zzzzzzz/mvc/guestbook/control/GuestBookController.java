package online.zzzzzzz.mvc.guestbook.control;

import freemarker.template.Configuration;
import freemarker.template.Template;
import online.zzzzzzz.basics.controller.BaseController;
import online.zzzzzzz.basics.entity.Page;
import online.zzzzzzz.basics.entity.RepJson;
import online.zzzzzzz.comment.*;
import online.zzzzzzz.mvc.blogs.dao.BlogBlogsMapper;
import online.zzzzzzz.mvc.door.Role.Role;
import online.zzzzzzz.mvc.door.service.DoorService;
import online.zzzzzzz.mvc.guestbook.dao.entity.BlogGuestBook;
import online.zzzzzzz.mvc.guestbook.service.GuestBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;
import org.springframework.web.util.HtmlUtils;

import javax.servlet.http.HttpServletRequest;
import java.io.StringWriter;
import java.io.Writer;
import java.util.*;

/**
 * @author zZZ....
 * @description 留言板
 * @date 2022/3/14
 */
@Controller
@RequestMapping("/GuestBookController")
public class GuestBookController extends BaseController {
    
    @Autowired
    private GuestBookService guestBookService;
    
    @Autowired
    private BlogBlogsMapper blogBlogsMapper;
    
    @Autowired
    private FreeMarkerConfigurer freeMarkerConfigurer;
    
    
    /**
     * 博客展示页接口
     *
     * @param pageData 参数
     * @return 二级树形
     */
    @ResponseBody
    @RequestMapping(value = "/list")
    public RepJson list(@RequestBody Page<BlogGuestBook> pageData) {
        
        RepJson repJson = new RepJson();
        try {
            Page<BlogGuestBook> list = guestBookService.list(pageData);
            repJson.setData(list);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
    
    /**
     * 留言版或者评论  html
     *
     * @param pageData 参数
     * @return 字符串的html
     */
    @ResponseBody
    @RequestMapping(value = "/listPage")
    public RepJson listPage(@RequestBody Page<BlogGuestBook> pageData) {
        
        RepJson repJson = new RepJson();
        try {
            Map<String, Object> map = guestBookService.listPage(pageData);
            repJson.setData(map);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }

    @Autowired
    private DoorService doorService;



    @ResponseBody
    @RequestMapping("/save")
    public RepJson save(BlogGuestBook blogGuestBook, HttpServletRequest request) {

        RepJson repJson = new RepJson();

        try {

            //验证必填属性
            boolean b = Tools.objectCheckIsNotNull(blogGuestBook);
            if (!b){
                repJson.setSuccess(false);
                return repJson;
            }

            //限制访问次数
            String ipAddress = IPUtils.getIpAddress(request);
            RepJson allowAcc = doorService.isAllowAcc(ipAddress, Role.guestbook);

            if (!allowAcc.isSuccess()){
                return allowAcc;
            }
            boolean type = blogGuestBook.getParentId()==-1;
            String nickname = blogGuestBook.getNickname();
            blogGuestBook.setContent(HtmlUtils.htmlEscape(blogGuestBook.getContent(),"UTF-8")); //防止html注入
           
            String email = blogGuestBook.getEmail();
            Integer id = blogGuestBook.getId();
            Integer parentId = blogGuestBook.getParentId();
            if (type) {
                blogGuestBook.setParentIds(",-1");
            } else {
                BlogGuestBook blogGuestBook1 = guestBookService.selectById(blogGuestBook.getParentId());
                blogGuestBook.setParentIds(blogGuestBook1.getParentIds() + "," + blogGuestBook.getParentId());
            }
            blogGuestBook.setCreateDate(new Date());
            guestBookService.insert(blogGuestBook);
    
            String content = blogGuestBook.getContent();
            boolean isGuest = blogGuestBook.getBlogId()==-1;
            Global.singleThreadExecutor.execute(() -> { //异步发送邮件
                try {
                   if (!type && blogBlogsMapper.isExist(parentId)==0){ //回复消息的
                       Configuration configuration = freeMarkerConfigurer.getConfiguration();
                       Template template = configuration.getTemplate("email/reply.ftl");
                       HashMap<String, Object> var = new HashMap<>();
                       var.put("type", isGuest ? "留言" : "评论");
                       var.put("name", nickname);
                       var.put("href", isGuest?Constant.DOMAIN:Constant.DOMAIN+blogBlogsMapper.selectById(id).getHref()); //TODO 跳转到留言版或者对应的博客页
                       var.put("content", content);
                       Writer out = new StringWriter(3000);
                       template.process(var, out);
                       String content1 = out.toString();
                       EmailUtil.sendEmail(content1, email);
                   }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            });
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
     *
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
     *
     * @param id id
     * @return 树杈
     */
    @ResponseBody
    @RequestMapping("getComment")
    public RepJson getComment(Integer id) {
        
        RepJson repJson = new RepJson();
        HashMap<String, Object> map = new HashMap<>();
        try {
            Integer topParentId = guestBookService.getTopParentId(id);
            BlogGuestBook myself = guestBookService.selectById(id);
            map.put("myself", myself);
            if (topParentId != null) {
                BlogGuestBook top = guestBookService.selectById(topParentId);
                List<BlogGuestBook> siblings = guestBookService.getChildById(topParentId);
                List<BlogGuestBook> child = guestBookService.getChildById(id);
                for (int i = 0; i < siblings.size(); i++) {
                    BlogGuestBook guestBook = siblings.get(i);
                    for (BlogGuestBook blogGuestBook : child) {
                        if (guestBook.getId().equals(blogGuestBook.getId())) {
                            siblings.remove(i--);
                        }
                    }
                    if (guestBook.getId().equals(id)) {
                        siblings.remove(i--);
                    }
                }
                map.put("top", top);
                map.put("siblings", siblings);
                map.put("child", child);
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
     *
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
     *
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
