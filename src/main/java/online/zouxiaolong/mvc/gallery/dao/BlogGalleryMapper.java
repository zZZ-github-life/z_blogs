package online.zouxiaolong.mvc.gallery.dao;

import online.zouxiaolong.basics.entity.Page;
import online.zouxiaolong.basics.mapper.Mapper;
import online.zouxiaolong.mvc.gallery.dao.entity.BlogGallery;
import online.zouxiaolong.mvc.guestbook.dao.entity.BlogGuestBook;
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
