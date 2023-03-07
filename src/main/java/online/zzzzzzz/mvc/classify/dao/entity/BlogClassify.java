package online.zzzzzzz.mvc.classify.dao.entity;

import online.zzzzzzz.basics.entity.BaseEntity;

/**
 * @author zZZ....
 * @description 博客分类  实体类
 * @date 2022/3/8
 */
public class BlogClassify  extends BaseEntity {


    /**
     * 分类key,唯一
     */
    private String classifyKey;

    /**
     * 分类名称
     */
    private String classifyName;
    
    /**
     * 颜色
     */
    private String color;
    

    /**
     * 该分类下的博客数量
     */
    private Integer classifyNum =0;

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

    public String getClassifyKey() {
        return classifyKey;
    }

    public void setClassifyKey(String classifyKey) {
        this.classifyKey = classifyKey;
    }

    public String getClassifyName() {
        return classifyName;
    }

    public void setClassifyName(String classifyName) {
        this.classifyName = classifyName;
    }

    public Integer getClassifyNum() {
        return classifyNum;
    }

    public void setClassifyNum(Integer classifyNum) {
        if (classifyNum == null) classifyNum =0;
        this.classifyNum = classifyNum;
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