package online.zouxiaolong.mvc.blogs.control;

import online.zouxiaolong.basics.controller.BaseController;
import online.zouxiaolong.basics.entity.RepJson;
import online.zouxiaolong.comment.Constant;
import online.zouxiaolong.comment.IPUtils;
import online.zouxiaolong.mvc.blogs.dao.BlogBlogsMapper;
import online.zouxiaolong.mvc.blogs.dao.entity.BlogBlogs;
import online.zouxiaolong.mvc.blogs.service.BlogBlogsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;
import java.util.function.Consumer;

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
    
    @Autowired
    private BlogBlogsMapper blogBlogsMapper;
    
    @ResponseBody
    @RequestMapping("frontList")
    public RepJson frontList(@RequestBody Map<String,Object> map) {

        RepJson repJson = new RepJson();
        try {
            setPageSize(map); //设置分页
            Map<String, Object> data = blogBlogsService.adminList(map);
            StringBuilder sb = new StringBuilder();
           
            List<Map<String, Object>>  list = (List<Map<String, Object>>)data.get("list");
            for (Map<String, Object> som : list) {
                String path = (String)som.get("path");
                String href = (String)som.get("href");
                String className = (String)som.get("className");
                String about = (String)som.get("about");
                String publishDate = (String)som.get("publishDate");
                String title = (String)som.get("title");
                String tagsName = (String)som.get("tagsName");
            
                String[] split = tagsName.split(",");
                StringBuilder tags = new StringBuilder();
                for (String tag : split) {
                    tags.append(Constant.tag1).append(tag).append(Constant.tag2).append(tag).append(Constant.tag3);
                }
    
                sb.append(Constant.card1).append(href)
                        .append(Constant.card2).append(path)
                        .append(Constant.card3).append(title)
                        .append(Constant.card4).append(about)
                        .append(Constant.card5).append(publishDate)
                        .append(Constant.card6).append(className)
                        .append(Constant.card7).append(className)
                        .append(Constant.card8).append(tags).append(Constant.card9);
            }
          
            data.remove("list");
            data.put("data",sb);
            data.put("size",list.size());
            repJson.setData(data);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
    
    @ResponseBody
    @RequestMapping("getCityAndIP")
    public RepJson getCityAndIP(HttpServletRequest httpServletRequest) {
        
        RepJson repJson = new RepJson();
        try {
            Map<String, Object> ipAndCity = IPUtils.getIPAndCity(httpServletRequest);
            if (ipAndCity==null){
                ipAndCity =new HashMap<>();
                ipAndCity.put("ip","unknown");
                ipAndCity.put("city","远方");
            }
            repJson.setData(ipAndCity);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
    
    @ResponseBody
    @RequestMapping("getIp")
    public RepJson getIp(HttpServletRequest httpServletRequest) {
        
        RepJson repJson = new RepJson();
        try {
            String ipAddress = IPUtils.getIpAddress(httpServletRequest);
            repJson.setData(ipAddress);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
    
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
    
    @ResponseBody
    @RequestMapping("tagsList")
    public RepJson tagsList(String name) {
        
        RepJson repJson = new RepJson();
        try {
            
            List<Map<String, Object>> data = blogBlogsService.tagsList(name);
            StringBuilder sb = new StringBuilder();
            for (Map<String, Object> datum : data) {
                sb.append(Constant.tagsCard1).append(datum.get("href"))
                        .append(Constant.tagsCard2).append(datum.get("path"))
                        .append(Constant.tagsCard3).append(datum.get("title"))
                        .append(Constant.tagsCard4).append(datum.get("title"))
                        .append(Constant.tagsCard5).append(datum.get("publish_date"))
                        .append(Constant.tagsCard6).append(datum.get("classify_name"))
                        .append(Constant.tagsCard7).append(datum.get("classify_name")).append(Constant.tagsCard8);
            }
            repJson.setData(sb);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
    
    @ResponseBody
    @RequestMapping("archiveList")
    public RepJson archiveList(@RequestBody Map<String,Object> map) {
        
        RepJson repJson = new RepJson();
        try {
            setPageSize(map); //设置分页
            Map<String, Object> data = blogBlogsService.adminList(map);
            StringBuilder sb = new StringBuilder();
            List<Map<String, Object>>  list = (List<Map<String, Object>>)data.get("list");
            for (Map<String, Object> som : list) {
                String path = (String)som.get("path");
                String href = (String)som.get("href");
                String className = (String)som.get("className");
                String about = (String)som.get("about");
                String publishDate = (String)som.get("publishDate");
                String title = (String)som.get("title");
                String tagsName = (String)som.get("tagsName");
        
                String[] split = tagsName.split(",");
                StringBuilder tags = new StringBuilder();
                for (String tag : split) {
                    tags.append(Constant.tag1).append(tag).append(Constant.tag2).append(tag).append(Constant.tag3);
                }
                boolean b =Integer.parseInt((String) map.get("currentLines")) %2 ==0;
                sb.append(Constant.archiveCard1).append(b?"fade-right":"fade-left")
               .append(Constant.archiveCard2).append(publishDate)
                        .append(Constant.archiveCard3).append(b?"fade-left":"fade-right")
                        .append(Constant.archiveCard4).append(path)
                        .append(Constant.archiveCard5).append(title)
                        .append(Constant.archiveCard6).append(title)
                        .append(Constant.archiveCard7).append(tags).append(Constant.archiveCard8);
            }
    
            data.remove("list");
            data.put("data",sb);
            data.put("size",list.size());
            repJson.setData(data);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
}
