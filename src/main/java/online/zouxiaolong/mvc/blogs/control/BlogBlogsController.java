package online.zouxiaolong.mvc.blogs.control;

import online.zouxiaolong.basics.controller.BaseController;
import online.zouxiaolong.basics.entity.RepJson;
import online.zouxiaolong.mvc.blogs.dao.entity.BlogBlogs;
import online.zouxiaolong.mvc.blogs.service.BlogBlogsService;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;

/**
 * @author zZZ....
 * @description
 * @date 2022/5/18
 */
@RequestMapping("/blogBlogs")
@Controller
public class BlogBlogsController extends BaseController {
    
    @Autowired
    private BlogBlogsService blogBlogsService;
    
  
    
    @ResponseBody
    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public RepJson save(@RequestBody BlogBlogs blogBlogs) {
        
        RepJson repJson = new RepJson();
        try {
            blogBlogsService.generateArticle(blogBlogs);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
            
            
        }
        return repJson;
    }
    
    @ResponseBody
    @RequestMapping("adminList")
    public RepJson adminList(@RequestBody Map<String,Object> map) {
        
        RepJson repJson = new RepJson();
        try {
            setPageSize(map); //设置分页
            Integer category =(Integer) map.get("category");
            if (category!=null){
                switch (category){
                    case 0:map.put("isOriginal","1");break;
                    case 1:map.put("isDraft","1");break;
                    case 2:map.put("isUp","1");break;
                    case 3:map.put("a","1");break;
                    case 4:map.put("b","1");break;
                    case 5:map.put("c","1");break;
                }
            }
            Map<String, Object> data = blogBlogsService.adminList(map);
            repJson.setData(data);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
    
    @ResponseBody
    @RequestMapping("get")
    public RepJson get(Integer id) {
        RepJson repJson = new RepJson();
        try {
            BlogBlogs blogBlogs = blogBlogsService.selectById(id);
            repJson.setData(blogBlogs);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
    
}
