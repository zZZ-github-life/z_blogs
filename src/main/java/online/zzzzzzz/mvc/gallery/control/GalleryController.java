package online.zzzzzzz.mvc.gallery.control;

import online.zzzzzzz.basics.controller.BaseController;
import online.zzzzzzz.basics.entity.Page;
import online.zzzzzzz.basics.entity.RepJson;
import online.zzzzzzz.comment.Global;
import online.zzzzzzz.mvc.gallery.dao.entity.BlogGallery;
import online.zzzzzzz.mvc.gallery.service.GalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @author zZZ....
 * @description  画廊公共接口
 * @date 2022/4/1
 */
@RequestMapping("/galleryController")
@Controller
public class GalleryController  extends BaseController {
    
    @Autowired
    private GalleryService galleryService;
    
    /**
     * 批量上传图片.自动剔除重复图片
     * @param $cusFiles_v
     * @param fileNames
     * @param fileMD5s
     * @return
     */
    @ResponseBody
    @RequestMapping("/fileUpload")
    public RepJson fileUpload(MultipartFile[] $cusFiles_v,String fileNames,String fileMD5s) {
        
        RepJson repJson = new RepJson();
        StringBuilder sb = new StringBuilder();
        try{
            String[] md5s = fileMD5s.split(",");
            String[] names = fileNames.split(",");
            SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM");
            String date = sdf.format(new Date());
            if ($cusFiles_v!=null && $cusFiles_v.length > 0 && $cusFiles_v.length == md5s.length && md5s.length ==names.length){
                    for (int i = 0; i < $cusFiles_v.length; i++) {
                        MultipartFile  multipartFile =  $cusFiles_v[i];
                        String suffix = Objects.requireNonNull(multipartFile.getOriginalFilename()).substring(multipartFile.getOriginalFilename().lastIndexOf(".") );
                        String dir = Global.fileRootPath() + File.separator + date + File.separator;
                        String filePath = dir+md5s[i];  //图片md5  防止重复
                        Global.createDir(dir);
                        File file = new File(filePath+suffix);
                       // if (file.exists()) continue;
                        
                        String absPath = Global.getAbsPath(file.getPath());
                        sb.append(",").append(absPath);
                        
                        BlogGallery blogGallery = new BlogGallery();
                        blogGallery.setContentType(multipartFile.getContentType());
                        blogGallery.setImgName(names[i]);
                        blogGallery.setMd5(md5s[i]);
                        blogGallery.setPath(absPath);
                        blogGallery.setUploadTime(new Date());
                        blogGallery.setSize(multipartFile.getSize());
                        blogGallery.setType("gallery");
                        galleryService.insertDuplicateKey(blogGallery);
                        multipartFile.transferTo(file); //保存图片
                    }
                String s = sb.toString().replaceFirst(",", "");
                repJson.setData(s);
            
            }else {
                repJson.setCode(2);
                repJson.setMsg("无文件");
            }
        }catch (Exception e){
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        
        return repJson;
    }
    
    /**
     * 单个文件上传，不做任何限制
     * @param file
     * @return
     */
    @ResponseBody
    @RequestMapping("parseFile")
    public RepJson parseFile(MultipartFile file) {
        
        RepJson repJson = new RepJson();
        try {
            String suffix = Objects.requireNonNull(file.getOriginalFilename()).substring(file.getOriginalFilename().lastIndexOf(".") );
            SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM");
    
            String date = sdf.format(new Date());
            String dir = Global.fileRootPath() + File.separator + date + File.separator;
            File img = new File(dir + UUID.randomUUID().toString() + suffix);
           
            String absPath = Global.getAbsPath(img.getPath());
    
            BlogGallery blogGallery = new BlogGallery();
            blogGallery.setContentType(file.getContentType());
            blogGallery.setImgName("blog_"+new Random().nextInt());
           // blogGallery.setMd5();
            blogGallery.setPath(absPath);
            blogGallery.setUploadTime(new Date());
            blogGallery.setSize(file.getSize());
            blogGallery.setType("article");
            galleryService.insertDuplicateKey(blogGallery);
            file.transferTo(img); //保存图片
            repJson.setData(absPath);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
    
    @ResponseBody
    @RequestMapping("/list")
    public RepJson list(@RequestBody Page<BlogGallery> page) {
        
        RepJson repJson = new RepJson();
        try {
            Integer count = galleryService.findPageWithCount(page);
            List<BlogGallery> pageWithResult = galleryService.findPageWithResult(page);
            page.setList(pageWithResult);
            page.setTotal(count);
            repJson.setData(page);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
            
            
        }
        return repJson;
    }
    
    
    @ResponseBody
    @RequestMapping("/save")
    public RepJson save(BlogGallery blogGallery) {
        
        RepJson repJson = new RepJson();
        try {
             galleryService.update(blogGallery);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
            
            
        }
        return repJson;
    }
    
    
    @ResponseBody
    @RequestMapping("/delete")
    public RepJson delete(Integer id) {
        
        RepJson repJson = new RepJson();
        try {
            galleryService.delete(id);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
            
        }
        return repJson;
    }
    
    // 计算文件的 MD5 值
    public static String getFileMD5(File file) {
    
        if (!file.isFile()) {
            return null;
        }
        MessageDigest digest = null;
        FileInputStream in = null;
        byte buffer[] = new byte[8192];
        int len;
        try {
            digest = MessageDigest.getInstance("MD5");
            in = new FileInputStream(file);
            while ((len = in.read(buffer)) != -1) {
                digest.update(buffer, 0, len);
            }
            BigInteger bigInt = new BigInteger(1, digest.digest());
            return bigInt.toString(16);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        } finally {
            try {
                in.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    
    }
}
