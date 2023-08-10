package online.zzzzzzz.mvc.blogs.dao;

import online.zzzzzzz.basics.listener.InitResource;
import online.zzzzzzz.basics.mapper.Mapper;
import online.zzzzzzz.mvc.blogs.dao.entity.BlogBlogs;
import org.apache.ibatis.annotations.*;
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
    List<Map<String,Object>> getListForRESSAndSearch(Map<String,Object> map);
    
    Integer getCountByParam(Map<String, Object> map);
    
    List<Map<String,Object>> findList(Map<String,Object> map);
    
    @Select("select bb.*,bg.path path,bc.classify_name  classify_name from blog_blogs bb  left join blog_gallery bg on bb.gallery_id =bg.id left join blog_classify bc on bb.classify_id = bc.id  left join blog_tags bt on FIND_IN_SET(bt.id,bb.tags_ids) where bt.tags_name =#{name}")
    List<Map<String, Object>> tagsList(String name);
    
    @Select("select bb.*,bg.path path,bc.classify_name  classify_name from blog_blogs bb  left join blog_gallery bg on bb.gallery_id =bg.id left join blog_classify bc on bb.classify_id = bc.id where bc.classify_name =#{name}")
    List<Map<String, Object>> classifyList(String name);
    
    
    @Select("SELECT count(1) num  ,date_format(publish_date,'%Y-%m-%d') date FROM z_blogs.blog_blogs group by date order by date")
    List<Map<String, Object>> getDateMap(Map<String, Object> var);
    
    @Insert("insert ignore  into unsubscribe(email) value(#{emailAddress})")
    void unsubscribe(String emailAddress);
    
    @Delete("delete from unsubscribe where email =#{address}")
    void renew(String address);
    
    @Select("select count(1) from unsubscribe where email=(select email from blog_guest_book where id =#{parentId})")
    int isExist(Integer parentId);
    
    @Select("SELECT content FROM copywriter AS t1 JOIN (SELECT ROUND(RAND() * (SELECT MAX(id) FROM copywriter)) AS id) AS t2 WHERE t1.id >= t2.id ORDER BY t1.id ASC LIMIT #{limit}")
    List<Map<String, Object>> poetryRand(int limit);
    
    @Insert("insert   into pageview(uc,num,type) values( #{uc}, 1 ,'uri'),( #{br}, 1,'browser' ) ,( #{city}, 1,'map' )ON DUPLICATE KEY UPDATE num = num+1")
    int pageview(@Param("uc") String uc,@Param("br") String br,@Param("city") String city);
    
    @Select("select * from pageview  where type in('uri','browser') order by num desc limit 10")
    List<Map<String,Object>> pvAll();
    
    @Select("select * from pageview  where type = 'map' order by num desc  limit 10")
    List<Map<String, Object>> pvMap(String map);
    
    @Update("update blog_blogs set hits= ifnull(hits,0)+1 where id= ( select id from  (select id from blog_blogs where href = #{href}) tem) ")
    Integer articleHits(String href);
    
    //更标签和分类的数量关联
    void updateClassifyAndTagsOfNum();
}
