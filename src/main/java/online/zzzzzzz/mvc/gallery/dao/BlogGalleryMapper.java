package online.zzzzzzz.mvc.gallery.dao;

import online.zzzzzzz.basics.mapper.Mapper;
import online.zzzzzzz.mvc.gallery.dao.entity.BlogGallery;
import org.springframework.stereotype.Repository;

/**
 * @author zZZ....
 * @description
 * @date 2022/4/1
 */
@Repository
public interface BlogGalleryMapper  extends Mapper<BlogGallery> {
    
    int insertDuplicateKey(BlogGallery blogGallery);
}
