package online.zouxiaolong.mvc.blogs.service;

import com.overzealous.remark.Remark;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import online.zouxiaolong.basics.entity.Page;
import online.zouxiaolong.basics.listener.InitResource;
import online.zouxiaolong.basics.service.BaseService;
import online.zouxiaolong.comment.Constant;
import online.zouxiaolong.comment.Cus_Global;
import online.zouxiaolong.comment.Tools;
import online.zouxiaolong.mvc.blogs.control.BlogBlogsController;
import online.zouxiaolong.mvc.blogs.dao.BlogBlogsMapper;
import online.zouxiaolong.mvc.blogs.dao.entity.BlogBlogs;
import online.zouxiaolong.mvc.classify.dao.ClassifyMapper;
import online.zouxiaolong.mvc.classify.dao.entity.BlogClassify;
import online.zouxiaolong.mvc.gallery.dao.BlogGalleryMapper;
import online.zouxiaolong.mvc.gallery.dao.entity.BlogGallery;
import online.zouxiaolong.mvc.guestbook.dao.GuestBookMapper;
import online.zouxiaolong.mvc.guestbook.dao.entity.BlogGuestBook;
import online.zouxiaolong.mvc.tags.dao.BlogTagsMapper;
import online.zouxiaolong.mvc.tags.dao.entity.BlogTags;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

import java.io.*;
import java.net.URL;
import java.nio.charset.StandardCharsets;
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
    private ClassifyMapper classifyMapper;
    
    @Autowired
    private BlogTagsMapper blogTagsMapper;
    @Autowired
    private BlogGalleryMapper blogGalleryMapper;
    
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
                    Cus_Global.atomicInteger.set(0);
                }
                blogBlogs.setPublishDate(new Date());
                blogBlogs.setHref(Constant.DOMAIN+Constant.ARTICLE_PATH+blogBlogs.fileName+Constant.HTML_SUFFIX);
            } else {
                Remark remark = new Remark();
                String md = remark.convert(blogBlogs.getContentHtml());
                blogBlogs.setContentMd(md);
                blogBlogs.setUpdateTime(new Date());
            }
            blogBlogs.setContent(Tools.convert(blogBlogs.getContentHtml()));
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
            List<BlogGuestBook> pageTop = guestBookMapper.findPageTop(page);
            BlogGallery gallery = blogGalleryMapper.selectById(blogBlogs.getGalleryId());
            Map<String, Object> var = new HashMap<>();
            var.put("blog", blogBlogs);
            var.put("classify", blogClassify);
            var.put("tags", tags);
            var.put("blogGuestBookList", pageTop);
            var.put("currentLines", pageTop.size());
            var.put("galleryPath", gallery.getPath());
            String realPath = Cus_Global.getRequest().getRealPath(Constant.ARTICLE_PATH);
            File file = new File(realPath + blogBlogs.fileName + Constant.HTML_SUFFIX);
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
        try {
            Configuration configuration = freeMarkerConfigurer.getConfiguration();
            Template template = configuration.getTemplate("index.ftl");
            Map<String, Object> var = new HashMap<>();
            var.put("isUp",true);
            List<BlogBlogs> list = blogBlogsMapper.findList(var);
        
            var.clear();
            var.put("order","publish_date desc");
            var.put("start",0);
            var.put("pageSize",12);
            List<Map<String, Object>> listByParam = mapper.getListByParam(var);
            var.clear();
            var.put("upList",list);
            var.put("blogList",listByParam);
            var.put("currentLines", listByParam.size());
            
            var.put("TV", InitResource.TV);
            var.put("PV", InitResource.PV);
            var.put("UV",InitResource.UV);
            var.put("WC",InitResource.WC);
            String realPath = Cus_Global.getRequest().getRealPath(Constant.PRIMARY_PATH);
            File file = new File(realPath + "index" + Constant.HTML_SUFFIX);
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
            
            String realPath = Cus_Global.getRequest().getRealPath(Constant.PRIMARY_PATH);
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
    
    
            String realPath = Cus_Global.getRequest().getRealPath(Constant.PRIMARY_PATH);
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
            String realPath = Cus_Global.getRequest().getRealPath(Constant.PRIMARY_PATH);
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
            String realPath = Cus_Global.getRequest().getRealPath(Constant.PRIMARY_PATH);
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
    
    public void deleteBlog(BlogBlogs blogBlogs){
        File file = new File( Cus_Global.getRequest().getRealPath(Constant.ARTICLE_PATH)+ blogBlogs.fileName + Constant.HTML_SUFFIX);
        if (file.exists()){
            boolean delete = file.delete();
            if (!delete){
                System.out.println("删除失败");
            // TODO 发短信给博主...
            }
        }
    }
    
    public  List<Map<String, Object>> tagsList(String name) {
    
        return blogBlogsMapper.tagsList(name);
    }
    
}
