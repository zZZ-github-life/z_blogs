package online.zzzzzzz.mvc.gallery.service;

import online.zzzzzzz.basics.service.BaseService;
import online.zzzzzzz.mvc.gallery.dao.BlogGalleryMapper;
import online.zzzzzzz.mvc.gallery.dao.entity.BlogGallery;
import org.springframework.stereotype.Service;

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
