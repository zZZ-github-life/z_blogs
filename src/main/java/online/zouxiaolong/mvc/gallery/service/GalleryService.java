package online.zouxiaolong.mvc.gallery.service;

import online.zouxiaolong.basics.service.BaseService;
import online.zouxiaolong.mvc.gallery.dao.BlogGalleryMapper;
import online.zouxiaolong.mvc.gallery.dao.entity.BlogGallery;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author zZZ....
 * @description
 * @date 2022/4/1
 */
@Service
public class GalleryService extends BaseService<BlogGalleryMapper, BlogGallery> {
    
    
   public int insertDuplicateKey(BlogGallery blogGallery){
       return mapper.insertDuplicateKey(blogGallery);
   }
    
}
