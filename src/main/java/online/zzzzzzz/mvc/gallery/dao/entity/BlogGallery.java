package online.zzzzzzz.mvc.gallery.dao.entity;

/**
 * @author zZZ....
 * @description 画廊实体类
 * @date 2022/4/1
 */
import online.zzzzzzz.basics.entity.BaseEntity;

import java.util.Date;

public class BlogGallery extends BaseEntity {
  
    
    /**
     * 图片名称
     */
    private String imgName;
    
    /**
     * 图片大小
     */
    private Long size;
    
    /**
     * 上传时间
     */
    private Date uploadTime;
    
    /**
     * 图片类型
     */
    private String contentType;
    
    /**
     * 磁盘存储路径
     */
    private String path;
    
    /**
     * 图片md5,相同不存储
     */
    private String md5;
    
    /**
     * 排序
     */
    private Integer sort;
    
    /**
     * 排序
     */
    private String type;
    
    public Integer getId() {
        return id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }
    
    public String getImgName() {
        return imgName;
    }
    
    public void setImgName(String imgName) {
        this.imgName = imgName;
    }
    
    public Long getSize() {
        return size;
    }
    
    public void setSize(Long size) {
        this.size = size;
    }
    
    public Date getUploadTime() {
        return uploadTime;
    }
    
    public void setUploadTime(Date uploadTime) {
        this.uploadTime = uploadTime;
    }
    
    public String getContentType() {
        return contentType;
    }
    
    public void setContentType(String contentType) {
        this.contentType = contentType;
    }
    
    public String getPath() {
        return path;
    }
    
    public void setPath(String path) {
        this.path = path;
    }
    
    public String getMd5() {
        return md5;
    }
    
    public void setMd5(String md5) {
        this.md5 = md5;
    }
    
    public Integer getSort() {
        return sort;
    }
    
    public void setSort(Integer sort) {
        this.sort = sort;
    }
    
    public String getType() {
        
        return type;
    }
    
    public void setType(String type) {
        
        this.type = type;
    }
    
}
