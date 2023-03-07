package online.zzzzzzz.mvc.tags.dao.entity;

import online.zzzzzzz.basics.entity.BaseEntity;

/**
 * @author zZZ....
 * @description 博客标签  实体类
 * @date 2022/3/8
 */

public class BlogTags extends BaseEntity {
 
    
    /**
     * 标签key,唯一
     */
    private String tagsKey;
    
    /**
     * 标签名称
     */
    private String tagsName;
    
    /**
     * 该标签下的博客数量
     */
    private Integer tagsNum=0;
    
    /**
     * 颜色
     */
    private String color;
    
    /**
     * 排序
     */
    private Integer sort;
    
    public Integer getId() {
        return id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }
    
    public String getTagsKey() {
        return tagsKey;
    }
    
    public void setTagsKey(String tagsKey) {
        this.tagsKey = tagsKey;
    }
    
    public String getTagsName() {
        return tagsName;
    }
    
    public void setTagsName(String tagsName) {
        this.tagsName = tagsName;
    }
    
    public Integer getTagsNum() {
        return tagsNum;
    }
    
    public void setTagsNum(Integer tagsNum) {
        if (tagsNum == null)tagsNum=0;
        this.tagsNum = tagsNum;
    }
    
    public String getColor() {
        return color;
    }
    
    public void setColor(String color) {
        this.color = color;
    }
    
    public Integer getSort() {
        return sort;
    }
    
    public void setSort(Integer sort) {
        this.sort = sort;
    }
}