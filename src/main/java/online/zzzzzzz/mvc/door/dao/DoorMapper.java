package online.zzzzzzz.mvc.door.dao;

import online.zzzzzzz.basics.mapper.Mapper;
import online.zzzzzzz.mvc.door.dao.entity.Door;
import online.zzzzzzz.mvc.gallery.dao.entity.BlogGallery;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
* @author Administrator
* @description 针对表【door(控制客户端功能访问次数)】的数据库操作Mapper
* @createDate 2023-06-27 22:28:01
* @Entity online.zzzzzzz.mvc.door.dao.entity.Door
*/
@Repository
public interface DoorMapper   extends Mapper<Door> {


    Door getByIpAndType(@Param("ip") String ip,@Param("type") Integer type);

}
