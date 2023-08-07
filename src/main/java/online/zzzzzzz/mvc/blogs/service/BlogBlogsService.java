package online.zzzzzzz.mvc.blogs.service;

import freemarker.template.Configuration;
import freemarker.template.Template;
import online.zzzzzzz.basics.entity.Page;
import online.zzzzzzz.basics.listener.InitResource;
import online.zzzzzzz.basics.service.BaseService;
import online.zzzzzzz.comment.Constant;
import online.zzzzzzz.comment.Global;
import online.zzzzzzz.comment.Tools;
import online.zzzzzzz.mvc.blogs.dao.BlogBlogsMapper;
import online.zzzzzzz.mvc.blogs.dao.entity.BlogBlogs;
import online.zzzzzzz.mvc.classify.dao.ClassifyMapper;
import online.zzzzzzz.mvc.classify.dao.entity.BlogClassify;
import online.zzzzzzz.mvc.gallery.dao.BlogGalleryMapper;
import online.zzzzzzz.mvc.gallery.dao.entity.BlogGallery;
import online.zzzzzzz.mvc.guestbook.dao.GuestBookMapper;
import online.zzzzzzz.mvc.guestbook.dao.entity.BlogGuestBook;
import online.zzzzzzz.mvc.guestbook.service.GuestBookService;
import online.zzzzzzz.mvc.tags.dao.BlogTagsMapper;
import online.zzzzzzz.mvc.tags.dao.entity.BlogTags;
import online.zzzzzzz.mvc.tools.dao.ToolsMapper;
import online.zzzzzzz.mvc.tools.dao.entity.BlogTools;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @author zZZ....
 * @description
 * @date 2022/5/18
 */

@Scope(proxyMode = ScopedProxyMode.TARGET_CLASS)
@Service
public class BlogBlogsService extends BaseService<BlogBlogsMapper, BlogBlogs> {
    
    @Autowired
    private FreeMarkerConfigurer freeMarkerConfigurer;
    
    @Autowired
    private BlogBlogsMapper blogBlogsMapper;
    
    @Autowired
    private GuestBookMapper guestBookMapper;
    
    @Autowired
    private GuestBookService guestBookService;
    
    @Autowired
    private ClassifyMapper classifyMapper;
    
    @Autowired
    private BlogTagsMapper blogTagsMapper;
    @Autowired
    private BlogGalleryMapper blogGalleryMapper;
    
    @Autowired
    private ToolsMapper toolsMapper;
    @Value("base.path")
    private String basePath;
    
    private static String date = new SimpleDateFormat("yyyyMMdd").format(new Date());
    
    public Map<String, Object> adminList(Map<String, Object> map) {
        
        HashMap<String, Object> hashMap = new HashMap<>();
        List<Map<String, Object>> listByParam = mapper.getListByParam(map);
        Integer count = mapper.getCountByParam(map);
        hashMap.put("list", listByParam);
        hashMap.put("count", count);
        return hashMap;
    }
    
    
    @Transactional(rollbackFor = Exception.class)
    public void generateArticle(BlogBlogs blogBlogs) {
        try {
            if (blogBlogs.getId() == null) {
        
                String date = new SimpleDateFormat("yyyyMMdd").format(new Date());
                if (!BlogBlogsService.date.equals(date)) {
                    Global.atomicInteger.set(0);
                }
                blogBlogs.setPublishDate(new Date());
                blogBlogs.fileName=  UUID.randomUUID().toString().replaceAll("-","");
                blogBlogs.setHref(Constant.ARTICLE_PATH+blogBlogs.fileName+Constant.HTML_SUFFIX);
               
            } else {
                blogBlogs.setUpdateTime(new Date());
            }
            
            blogBlogs.setContent(Tools.convert(blogBlogs.getContentHtml()));
            String content = blogBlogs.getContent();
            blogBlogs.setAbout(content.substring(0, Math.min(content.length(), 100)));
            
            save(blogBlogs);
            classifyMapper.updateSQL("update blog_classify set classify_num=classify_num+1 where id = "+blogBlogs.getClassifyId());
            String[] split = blogBlogs.getTagsIds().split(",");
            for (String tagId : split) {
                classifyMapper.updateSQL("update blog_tags set tags_num=tags_num+1 where id = "+tagId);
            }
            generateFtl(blogBlogs);
        }catch (Exception e){
            deleteBlog(blogBlogs);//回滚删除生成的文件
            e.printStackTrace();
            throw new RuntimeException("生成博客文章页异常");
        }
    }
    
    //生成文章详情
    public void generateFtl(BlogBlogs blogBlogs) {
        OutputStreamWriter outputStreamWriter=null;
        try {
            Configuration configuration = freeMarkerConfigurer.getConfiguration();
            Template template;
    
            template = configuration.getTemplate("articlepage.ftl");
            BlogClassify blogClassify = classifyMapper.selectById(blogBlogs.getClassifyId());
            String tagsIds = blogBlogs.getTagsIds();
            String[] split = tagsIds.split(",");
            ArrayList<BlogTags> tags = new ArrayList<>();
            for (String s : split) {
                BlogTags tag = blogTagsMapper.selectById(Integer.parseInt(s));
                tags.add(tag);
            }
            Page<BlogGuestBook> page = new Page<>();
            page.setCurrentLines(0);
            page.setPageSize(2);
            List<BlogGuestBook> pageTop = guestBookService.topList(page);
            BlogGallery gallery = blogGalleryMapper.selectById(blogBlogs.getGalleryId());
            int topCount = guestBookMapper.findPageTopCount(page);
            Map<String, Object> var = new HashMap<>();
            var.put("blog", blogBlogs);
            var.put("classify", blogClassify);
            var.put("tags", tags);
            var.put("DOMAIN", Constant.DOMAIN);
            var.put("WEBSITENAME", Constant.WEBSITENAME);
            var.put("blogGuestBookList", pageTop);
            var.put("currentLines", pageTop.size());
            var.put("galleryPath", gallery.getPath());
            var.put("loading",topCount>pageTop.size()?"block":"none");
            String realPath = InitResource.servletContext.getRealPath(Constant.ARTICLE_PATH);
           
            String temp = blogBlogs.getHref();
            temp= blogBlogs.fileName==null? blogBlogs.fileName=temp.substring(  temp.lastIndexOf('/'),temp.lastIndexOf(Constant.HTML_SUFFIX)):blogBlogs.fileName;
           
            File file = new File(realPath + temp + Constant.HTML_SUFFIX);
            outputStreamWriter = new OutputStreamWriter(new FileOutputStream(file), StandardCharsets.UTF_8);
            template.process(var, outputStreamWriter);
        }catch (Exception e){
            e.printStackTrace();
            throw new RuntimeException();
        }finally {
            if (outputStreamWriter!=null){
                try {
                    outputStreamWriter.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    
    //生成首页
    public void generateIndex(){
        OutputStreamWriter outputStreamWriter=null;
        OutputStreamWriter outputStreamWriter1=null;
        try {
            Configuration configuration = freeMarkerConfigurer.getConfiguration();
            Template template = configuration.getTemplate("index.ftl");
            Template template1 = configuration.getTemplate("index1.ftl");
            Map<String, Object> var = new HashMap<>();
            var.put("isUp",true);
            List<Map<String,Object>> list = blogBlogsMapper.findList(var);
        
            var.clear();
            var.put("order","publish_date desc");
            var.put("start",0);
            var.put("pageSize",12);
            List<Map<String, Object>> listByParam = mapper.getListByParam(var);
            Integer total = mapper.getCountByParam(var);
            var.clear();
            var.put("upList",list);
            var.put("blogList",listByParam);
            var.put("currentLines", listByParam.size());
            
            var.put("TV", InitResource.TV);
            var.put("PV", InitResource.PV);
            var.put("UV",InitResource.UV);
            var.put("WC",InitResource.WC);
    
            var.put("loading",!(total>listByParam.size()));
    
            String realPath = InitResource.servletContext.getRealPath(Constant.PRIMARY_PATH);
            File file = new File(realPath + "index" + Constant.HTML_SUFFIX);
            File file1 = new File(realPath + "index1" + Constant.HTML_SUFFIX);
            outputStreamWriter = new OutputStreamWriter(new FileOutputStream(file,false), StandardCharsets.UTF_8);
            template.process(var, outputStreamWriter);
            outputStreamWriter1 = new OutputStreamWriter(new FileOutputStream(file1), StandardCharsets.UTF_8);
            template1.process(var,outputStreamWriter1);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException();
        } finally {
            
            if (outputStreamWriter!=null){
                try {
                    outputStreamWriter.close();
                  
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (outputStreamWriter1!=null){
                try {
                    outputStreamWriter1.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            
        }
    
    }
    
    //生成分类页
    public void generateClassify(){
        OutputStreamWriter outputStreamWriter=null;
        try {
            Configuration configuration = freeMarkerConfigurer.getConfiguration();
            Template template = configuration.getTemplate("tags.ftl");
            Map<String, Object> var = new HashMap<>();
            List<BlogClassify> classify = classifyMapper.getAll();
            List<BlogTags> tags = blogTagsMapper.getAll();
           
            var.put("classifyList",classify);
            var.put("tags",tags);
            String realPath = InitResource.servletContext.getRealPath(Constant.PRIMARY_PATH);
            File file = new File(realPath + "tags" + Constant.HTML_SUFFIX);
            outputStreamWriter = new OutputStreamWriter(new FileOutputStream(file), StandardCharsets.UTF_8);
            template.process(var, outputStreamWriter);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException();
        } finally {
            if (outputStreamWriter!=null){
                try {
                    outputStreamWriter.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    //生成时光轴
    public void generateArchive(){
        OutputStreamWriter outputStreamWriter=null;
        try {
            Configuration configuration = freeMarkerConfigurer.getConfiguration();
            Template template = configuration.getTemplate("archive.ftl");
            Map<String, Object> var = new HashMap<>();
          
           
            var.put("order","publish_date desc");
            var.put("start",0);
            var.put("pageSize",20);
            List<Map<String, Object>> listByParam = mapper.getListByParam(var);
            var.clear();
            Integer total = mapper.getCountByParam(var);
            List<Map<String, Object>>  heatmap = mapper.getDateMap(var);
            var.put("blogList",listByParam);
            var.put("currentLines", listByParam.size());
            var.put("heatmap",heatmap);
            var.put("total",total);
    
            var.put("loading",!(total>listByParam.size()));
            
            String realPath = InitResource.servletContext.getRealPath(Constant.PRIMARY_PATH);
            File file = new File(realPath + "archive" + Constant.HTML_SUFFIX);
            outputStreamWriter = new OutputStreamWriter(new FileOutputStream(file), StandardCharsets.UTF_8);
            template.process(var, outputStreamWriter);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException();
        } finally {
            if (outputStreamWriter!=null){
                try {
                    outputStreamWriter.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    
    //生成网站导航
    public void generateNavigation(){
        OutputStreamWriter outputStreamWriter=null;
        try {
            Configuration configuration = freeMarkerConfigurer.getConfiguration();
            Template template = configuration.getTemplate("tools.ftl");
            Map<String, Object> var = new HashMap<>();
            List<BlogTools> all = toolsMapper.getAll();
            var.put("tools",all);
            String realPath = InitResource.servletContext.getRealPath(Constant.PRIMARY_PATH);
            File file = new File(realPath + "tools" + Constant.HTML_SUFFIX);
            outputStreamWriter = new OutputStreamWriter(new FileOutputStream(file), StandardCharsets.UTF_8);
            template.process(var, outputStreamWriter);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException();
        } finally {
            if (outputStreamWriter!=null){
                try {
                    outputStreamWriter.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    //生成留言版
    public void generateGuestBook(){
        OutputStreamWriter outputStreamWriter=null;
        try {
            Configuration configuration = freeMarkerConfigurer.getConfiguration();
            Template template = configuration.getTemplate("guestbook.ftl");
            Map<String, Object> var = new HashMap<>();
            Page<BlogGuestBook> page = new Page<>();
            page.setCurrentLines(0);
            page.setPageSize(20);
            List<BlogGuestBook> pageTop = guestBookService.topList(page);
            int topCount = guestBookMapper.findPageTopCount(page);
            int total = guestBookMapper.findPageWithCount(page);
    
            var.put("guestBookList",pageTop);
            var.put("currentLines", pageTop.size());
            var.put("total",total);
            var.put("loading",topCount>pageTop.size()?"block":"none");
            
            String realPath = InitResource.servletContext.getRealPath(Constant.PRIMARY_PATH);
           
            File file = new File(realPath + "guestbook" + Constant.HTML_SUFFIX);
            outputStreamWriter = new OutputStreamWriter(new FileOutputStream(file), StandardCharsets.UTF_8);
            template.process(var, outputStreamWriter);
            
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException();
        } finally {
            if (outputStreamWriter!=null){
                try {
                    outputStreamWriter.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    
    //批量生成文章详情页
    public void generateArticles(){
       try {
           Page<BlogBlogs> page = new Page<>();
           page.setP(new BlogBlogs());
           page.setPageSize(200);
           Integer count = blogBlogsMapper.findPageWithCount(page);
           int pageTotal= count==null?0: (count%page.getPageSize()==0?count/page.getPageSize():count/page.getPageSize()+1);
           for (int i = 0; i < pageTotal; i++) {
               page.setStart(i);
               List<BlogBlogs> pageWithResult = blogBlogsMapper.findPageWithResult(page);
               for (BlogBlogs blogBlogs : pageWithResult) {
                   try {
                       generateFtl(blogBlogs);
                   }catch (Exception e){
                       e.printStackTrace();
                   }
               }
           }
       }catch (Exception e){
           e.printStackTrace();
       }
    }
    
    //生成维护页面
    public void  generate404(){
        OutputStreamWriter outputStreamWriter=null;
        try {
            Configuration configuration = freeMarkerConfigurer.getConfiguration();
            Template template;
            template = configuration.getTemplate("404.ftl");
            Map<String, Object> var = new HashMap<>();
            String realPath = InitResource.servletContext.getRealPath(Constant.PRIMARY_PATH);
            File file = new File(realPath + "404" + Constant.HTML_SUFFIX);
            outputStreamWriter = new OutputStreamWriter(new FileOutputStream(file), StandardCharsets.UTF_8);
            template.process(var, outputStreamWriter);
            
        }catch (Exception e){
            e.printStackTrace();
            throw new RuntimeException();
        }finally {
            if (outputStreamWriter!=null){
                try {
                    outputStreamWriter.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        
    }
    
    //生成RESS 和 搜索页 页面  最多生成两百条
    public void  generateRESSAndSearch(){
        OutputStreamWriter outputStreamWriter=null;
        OutputStreamWriter outputStreamWriter1=null;
    
        try {
            Configuration configuration = freeMarkerConfigurer.getConfiguration();
            Template template = configuration.getTemplate("RESS.ftl");
            Template template1= configuration.getTemplate("search.ftl");
            Map<String, Object> var = new HashMap<>();
       
           
            var.put("order","publish_date desc");
            var.put("start",0);
            var.put("pageSize",200);
            List<Map<String, Object>> listByParam = mapper.getListForRESSAndSearch(var);
            var.clear();
            var.put("blogList",listByParam);
            var.put("WEBSITENAME", Constant.WEBSITENAME);
            var.put("MOTTO", Constant.MOTTO);
            var.put("DOMAIN", Constant.DOMAIN);
            
    
            String realPath = InitResource.servletContext.getRealPath("/xml/");
            File file = new File(realPath + "RESS" + Constant.XML_SUFFIX);
            File file1 = new File(realPath + "search" + Constant.XML_SUFFIX);
            outputStreamWriter = new OutputStreamWriter(Files.newOutputStream(file.toPath()), StandardCharsets.UTF_8);
            template.process(var, outputStreamWriter);
    
            outputStreamWriter1 = new OutputStreamWriter(Files.newOutputStream(file1.toPath()), StandardCharsets.UTF_8);
            template1.process(var, outputStreamWriter1);
    
    
        }catch (Exception e){
            e.printStackTrace();
           // throw new RuntimeException();
        }finally {
            if (outputStreamWriter!=null){
                try {
                    outputStreamWriter.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (outputStreamWriter1!=null){
                try {
                    outputStreamWriter1.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    
    }
    
    public void deleteBlog(BlogBlogs blogBlogs){
        File file = new File( InitResource.servletContext.getRealPath(Constant.ARTICLE_PATH)+ blogBlogs.fileName + Constant.HTML_SUFFIX);
        if (file.exists()){
            boolean delete = file.delete();
            if (!delete){
                System.out.println("删除失败");
            // TODO 发短信给博主...
            }
        }
    }
    
    public  List<Map<String, Object>> tagsList(String name,String type) {
        if ("tags".equals(type)){
            return blogBlogsMapper.tagsList(name);
        }else if ("classify".equals(type)){
            return blogBlogsMapper.classifyList(name);
        }
        return null;
    }
    
    
    public   String tagsBt(String name,String type) {
    
        List<Map<String, Object>> list = tagsList(name, type);
        StringBuilder sb = new StringBuilder();
        for (Map<String, Object> datum : list) {
            sb.append(Constant.tagsCard1).append(datum.get("href"))
                    .append(Constant.tagsCard2).append(datum.get("path"))
                    .append(Constant.tagsCard3).append(datum.get("title"))
                    .append(Constant.tagsCard4).append(datum.get("title"))
                    .append(Constant.tagsCard5).append(datum.get("publish_date"))
                    .append(Constant.tagsCard6).append(datum.get("classify_name"))
                    .append(Constant.tagsCard7).append(datum.get("classify_name")).append(Constant.tagsCard8);
        }
        return sb.toString();
    }
    
    
    /**
     * 退订邮件
     * @param emailAddress 邮件地址
     */
    public void unsubscribe(String emailAddress) {
        blogBlogsMapper.unsubscribe(emailAddress);
    
    }
    
    /**
     * 续订邮件
     * @param address 邮件地址
     */
    public void renew(String address) {
        blogBlogsMapper.renew(address);
    }
    
    public List<Map<String, Object>> poetryRand(int limit) {
        return blogBlogsMapper.poetryRand(limit);
    }
    
    public void updateClassifyAndTagsOfNum() {
        blogBlogsMapper.updateClassifyAndTagsOfNum();
    }
    
    /**
     * 初始化化博客主站
     */
    public void initHtml() {
        log.info("开始生成站点页面");
        updateClassifyAndTagsOfNum();
        generateIndex();
        generateClassify();
        generateArchive();
        generateNavigation();
        generateGuestBook();
        generateArticles();
        generate404();
        generateRESSAndSearch();
        log.info("结束生成站点页面");
    }
    
}
