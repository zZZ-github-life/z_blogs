package online.zouxiaolong.mvc.gallery.control;

import online.zouxiaolong.basics.controller.BaseController;
import online.zouxiaolong.basics.entity.Page;
import online.zouxiaolong.basics.entity.RepJson;
import online.zouxiaolong.comment.Cus_Global;
import online.zouxiaolong.mvc.gallery.dao.entity.BlogGallery;
import online.zouxiaolong.mvc.gallery.service.GalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.util.Date;
import java.util.List;
import java.util.Objects;

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
    
    
    @ResponseBody
    @RequestMapping("/fileUpload")
    public RepJson fileUpload(MultipartFile[] $cusFiles_v,String fileNames,String fileMD5s) {
        
        RepJson repJson = new RepJson();
        StringBuilder sb = new StringBuilder();
        try{
            String[] md5s = fileMD5s.split(",");
            String[] names = fileNames.split(",");
            if ($cusFiles_v!=null && $cusFiles_v.length > 0 && $cusFiles_v.length == md5s.length && md5s.length ==names.length){
                    for (int i = 0; i < $cusFiles_v.length; i++) {
                        MultipartFile  multipartFile =  $cusFiles_v[i];
                        String suffix = Objects.requireNonNull(multipartFile.getOriginalFilename()).substring(multipartFile.getOriginalFilename().lastIndexOf(".") );
                        String dir = Cus_Global.fileRootPath() + File.separator ;
                        String filePath = dir+md5s[i];  //图片md5  防止重复
                        Cus_Global.createDir(dir);
                        File file = new File(filePath+suffix);
                        if (file.exists()) continue;
                        
                        multipartFile.transferTo(file);
                        String absPath = Cus_Global.getAbsPath(file.getPath());
                        sb.append(",").append(absPath);
                        
                        BlogGallery blogGallery = new BlogGallery();
                        blogGallery.setContentType(multipartFile.getContentType());
                        blogGallery.setImgName(names[i]);
                        blogGallery.setMd5(md5s[i]);
                        blogGallery.setPath(absPath);
                        blogGallery.setUploadTime(new Date());
                        blogGallery.setSize(multipartFile.getSize());
                        
                        galleryService.insertDuplicateKey(blogGallery);
                        
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
    
    
    @ResponseBody
    @RequestMapping("/list")
    public RepJson list(Page<BlogGallery> page) {
        
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
            repJson.setMsg(e.getMessage());
            
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
            repJson.setMsg(e.getMessage());
            
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
            repJson.setMsg(e.getMessage());
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
