package online.zouxiaolong.mvc.blogs.dao;

import online.zouxiaolong.basics.mapper.Mapper;
import online.zouxiaolong.mvc.blogs.dao.entity.BlogBlogs;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * @author zZZ....
 * @description
 * @date 2022/4/25
 */
@Repository
public interface BlogBlogsMapper extends Mapper<BlogBlogs> {
    
    List<Map<String,Object>> getListByParam(Map<String,Object> map);
    
    Integer getCountByParam(Map<String, Object> map);
    
    List<BlogBlogs> findList(Map<String,Object> map);
    
    @Select("select bb.*,bg.path path,bc.classify_name  classify_name from blog_blogs bb  left join blog_gallery bg on bb.gallery_id =bg.id left join blog_classify bc on bb.classify_id = bc.id  left join blog_tags bt on FIND_IN_SET(bt.id,bb.tags_ids) where bt.tags_name =#{name}")
    List<Map<String, Object>> tagsList(String name);
    
    @Select("SELECT count(1) num  ,date_format(publish_date,'%Y-%m-%d') date FROM z_blogs.blog_blogs group by date order by date")
    List<Map<String, Object>> getDateMap(Map<String, Object> var);
    
}
