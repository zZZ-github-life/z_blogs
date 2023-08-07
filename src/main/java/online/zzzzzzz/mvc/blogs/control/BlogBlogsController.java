package online.zzzzzzz.mvc.blogs.control;

import freemarker.template.Configuration;
import freemarker.template.Template;
import online.zzzzzzz.basics.controller.BaseController;
import online.zzzzzzz.basics.entity.RepJson;
import online.zzzzzzz.basics.listener.InitResource;
import online.zzzzzzz.comment.*;
import online.zzzzzzz.mvc.blogs.dao.BlogBlogsMapper;
import online.zzzzzzz.mvc.blogs.dao.entity.BlogBlogs;
import online.zzzzzzz.mvc.blogs.service.BlogBlogsService;
import online.zzzzzzz.mvc.classify.dao.ClassifyMapper;
import online.zzzzzzz.mvc.classify.dao.entity.BlogClassify;
import online.zzzzzzz.mvc.guestbook.dao.GuestBookMapper;
import online.zzzzzzz.mvc.sys.dao.SysMapper;
import online.zzzzzzz.mvc.tags.dao.BlogTagsMapper;
import online.zzzzzzz.mvc.tags.dao.entity.BlogTags;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.InputStream;
import java.io.StringWriter;
import java.io.Writer;
import java.net.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

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
    
    @Autowired
    private GuestBookMapper guestBookMapper;
    
    @Autowired
    private FreeMarkerConfigurer freeMarkerConfigurer;
    

    
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

    /**
     * 获取客户端ip地址，以及聊天cookie设置（防止盗用）
     * @param request request
     * @param response response
     * @return json
     */
    @ResponseBody
    @RequestMapping("getIp")
    public RepJson getIp(HttpServletRequest request,HttpServletResponse response) {
        
        RepJson repJson = new RepJson();
        try {
            String ipAddress = IPUtils.getIpAddress(request);
            repJson.setData(ipAddress);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }

        try {
            //设置chat的cookie
            Cookie cookie;
            if ((cookie = Tools.getCookie(request, Constant.CHATCOOKIE))==null) {
                cookie = new Cookie(Constant.CHATCOOKIE, UUID.randomUUID().toString());
            }
            cookie.setHttpOnly(true);
            cookie.setPath("/");
            response.addCookie(cookie);
        }catch (Exception e){
            e.printStackTrace();
        }
        return repJson;
    }
    
    
    @ResponseBody
    @RequestMapping("tagsList")
    public RepJson tagsList(String name,String type) {
        
        RepJson repJson = new RepJson();
        try {
            String sb = blogBlogsService.tagsBt(name,type);
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
                String publishDate = (String)som.get("publishDate");
                String title = (String)som.get("title");
                String tagsName = (String)som.get("tagsName");
                
                String[] split = tagsName.split(",");
                StringBuilder tags = new StringBuilder();
                for (String tag : split) {
                    tags.append(Constant.tag1).append(tag).append(Constant.tag2).append(tag).append(Constant.tag3);
                }
                boolean b =(Integer) map.get("currentLines") %2 ==0;
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


    @ResponseBody
    @RequestMapping("ptu")
    public RepJson ptu() {
        
        RepJson repJson = new RepJson();
        try {
            HashMap<String, Object> map = new HashMap<>();
            map.put("PV", InitResource.PV);
            map.put("TV", InitResource.TV);
            map.put("UV", InitResource.UV);
            map.put("WC", InitResource.WC);
            repJson.setData(map);


        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
    
    @ResponseBody
    @RequestMapping("poetry")
    public RepJson poetry(Integer limit) {
        
        RepJson repJson = new RepJson();
        try {
            if (!(limit!=null && limit<20)){
                limit=7;
            }
            List<Map<String,Object>> list = blogBlogsService.poetryRand(limit);
            repJson.setData(list);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
    
    
    /*++++++++++++++++++++++++++++++++++++++++++后台+++++++++++++++++++++++++++++++++++++++++++*/
    
    @ResponseBody
    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public RepJson save(@RequestBody BlogBlogs blogBlogs) {
        
        RepJson repJson = new RepJson();
        try {
            blogBlogsService.generateArticle(blogBlogs);
            
            Global.singleThreadExecutor.execute(() -> { //等待事务提交，开启线程更新页面
                try {
                    blogBlogsMapper.updateClassifyAndTagsOfNum();
                    blogBlogsService.generateIndex();
                    blogBlogsService.generateClassify();
                    blogBlogsService.generateArchive();
                    blogBlogsService.generateRESSAndSearch();
                    SysMapper sysMapper = (SysMapper)  Global.getBean("sysMapper");
                    Integer wc = sysMapper.getWC();
                    InitResource.WC =new AtomicLong(wc);
                }catch (Exception e){
                    e.printStackTrace();
                }
            });
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
                    case 1:map.put("isPublic","1");break;
                    case 2:map.put("isDraft","1");break;
                    case 3:map.put("a","1");break;
                    case 4:map.put("b","1");break;
                    case 5:map.put("isUp","1");break;
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
    @RequestMapping("delBlog")
    public RepJson delBlog(Integer id) {
        
        RepJson repJson = new RepJson();
        try {
            blogBlogsService.delete(id);
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
    @RequestMapping("sysMsg")
    public RepJson sysMsg() {
    
        
        RepJson repJson = new RepJson();
        try {
            
             double cpu_use = OSUtil.getCpuUsage();
             double cpu_free = 100.00-cpu_use;
             double dis_use = OSUtil.getDiskUsage();
             double dis_free =  100.00-dis_use;
             double mem_use = OSUtil.getMemUsage();
             double mem_free = 100.00- mem_use;
    
            HashMap<String, Object> hashMap = new HashMap<>();
            hashMap.put("cpu_use",cpu_use);
            hashMap.put("cpu_free",cpu_free);
            hashMap.put("mem_use",mem_use);
            hashMap.put("mem_free",mem_free);
            hashMap.put("disk_use",dis_use);
            hashMap.put("disk_free",dis_free);
            repJson.setData(hashMap);
    
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
    
    @ResponseBody
    @RequestMapping("uriAndBrowser")
    public RepJson uriAndBrowser() {
        
        RepJson repJson = new RepJson();
        try {
            List<Map<String, Object>> list = blogBlogsMapper.pvAll();
            repJson.setData(list);
            repJson.setCode(InitResource.PV.intValue());
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
    
    @ResponseBody
    @RequestMapping("pvMap")
    public RepJson pvMap() {
        
        RepJson repJson = new RepJson();
        try {
            
            List<Map<String, Object>> list = blogBlogsMapper.pvMap("map");
            HashMap<Object, Object> hashMap = new HashMap<>();
            for (Map<String, Object> map : list) {
                hashMap.put(map.get("uc"),map.get("num"));
            }
            repJson.setData(hashMap);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
    
    @Autowired
    private ClassifyMapper classifyMapper;
    
    @Autowired
    private BlogTagsMapper blogTagsMapper;
    
    @GetMapping(value = "/tagsBt")
    public void tagsBt(String type, String key, HttpServletResponse response) {
        try {
            Configuration configuration = freeMarkerConfigurer.getConfiguration();
            Template template = configuration.getTemplate("tagsBt.ftl");
            response.setContentType("text/html;charset=utf-8");
            HashMap<String, Object> var = new HashMap<>();
            var.put("type",type);
            var.put("key",key);
            
            if (type.equals("classify")){
                List<BlogClassify> classify = classifyMapper.getAll();
                var.put("classifyList",classify);
    
            }else if (type.equals("tags")){
                List<BlogTags> tags = blogTagsMapper.getAll();
                var.put("tags",tags);
            }
            
    
            String s = blogBlogsService.tagsBt(key, type);
            var.put("cards",s);
            template.process(var, response.getWriter());
        } catch (Exception e) {
            e.printStackTrace();
        }
  
    }


    public static void main(String[] args) {
        RepJson repJson = new RepJson();
        try {
            // 设置代理
            Proxy webProxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("127.0.0.1", 2954));

            // 使用代理
            URL weburl = new URL("http://zzzzzzz.online/blogBlogs/ptu");
            System.out.println("打开代理");
            HttpURLConnection webProxyConnection = (HttpURLConnection) weburl.openConnection();

            InputStream inputStream = webProxyConnection.getInputStream();
            Socket socket = new Socket("http://zzzzzzz.online/blogBlogs/ptu", 80);

            int line;
            byte[] bytes = new byte[1024];
            StringBuilder stringBuilder = new StringBuilder();
            while ( (line=inputStream.read(bytes))!=-1){
                stringBuilder.append(new String(bytes,0,line));
            }
            System.out.println(stringBuilder.toString());
            repJson.setMsg(stringBuilder.toString());
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
