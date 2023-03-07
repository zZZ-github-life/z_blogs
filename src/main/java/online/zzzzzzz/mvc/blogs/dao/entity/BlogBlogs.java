package online.zzzzzzz.mvc.blogs.dao.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import online.zzzzzzz.basics.entity.BaseEntity;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

/**
 * @author zZZ....
 * @description 文章实体类
 * @date 2022/4/25
 */
public class BlogBlogs  extends BaseEntity {
    
    
    /**
     * 主键
     */
    private Integer id;
    
    /**
     * 是否原创(1:是,0:否)
     */
    private Boolean isOriginal;
    
    /**
     * 标题
     */
    private String title;
    
    /**
     * 分类id
     */
    private Integer classifyId;
    
    /**
     * 标签ids
     */
    private String tagsIds;
    
    /**
     * 图片id
     */
    private Integer galleryId;
    
    /**
     * 发布日期
     */
    @DateTimeFormat(pattern = "yyyy/MM/dd")
    @JsonFormat(pattern  = "yyyy/MM/dd")
    private Date publishDate;
    
    /**
     * 开启赞赏(1:是,0:否)
     */
    private Boolean isPraise;
    
    /**
     * 是否置顶(1:是,0:否)
     */
    private Boolean isUp;
    
    /**
     * 开启评论(1:是,0:否)
     */
    private Boolean isReview;
    
    /**
     * 转载声明(1:是,0:否)
     */
    private Boolean isDeclare;
    
    /**
     * 是否公开(1:是,0:否)
     */
    private Boolean isPublic;
    
    /**
     * 存稿(1:是,0:否)
     */
    private Boolean isDraft;
    
    /**
     * 文章字数
     */
    private Integer words;
    
    /**
     * 阅读时长
     */
    private String duration;
    
    /**
     * 点击次数
     */
    private Integer hits;
    
    /**
     * 文章原文
     */
    private String content;
    
    /**
     * 文章markdown格式
     */
    private String contentMd;
    
    /**
     * 文章内容html格式
     */
    private String contentHtml;
    
    /**
     * 文章链接
     */
    private String href;
    
    /**
     * 文章简介
     */
    private String about;
    /**
     * 修改时间
     */
    private Date updateTime;
    
    public Date getUpdateTime() {
        
        return updateTime;
    }
    
    public void setUpdateTime(Date updateTime) {
        
        this.updateTime = updateTime;
    }
    
    public String fileName; //博客网页文件名
    
    public Integer getId() {
        return id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }
    
    public Boolean getIsOriginal() {
        return isOriginal;
    }
    
    public void setIsOriginal(Boolean isOriginal) {
        this.isOriginal = isOriginal;
    }
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public Integer getClassifyId() {
        return classifyId;
    }
    
    public void setClassifyId(Integer classifyId) {
        this.classifyId = classifyId;
    }
    
    public String getTagsIds() {
        return tagsIds;
    }
    
    public void setTagsIds(String tagsIds) {
        this.tagsIds = tagsIds;
    }
    
    public Integer getGalleryId() {
        return galleryId;
    }
    
    public void setGalleryId(Integer galleryId) {
        this.galleryId = galleryId;
    }
    
    public Date getPublishDate() {
        return publishDate;
    }
    
    public void setPublishDate(Date publishDate) {
        this.publishDate = publishDate;
    }
    
    public Boolean getIsPraise() {
        return isPraise;
    }
    
    public void setIsPraise(Boolean isPraise) {
        this.isPraise = isPraise;
    }
    
    public Boolean getIsUp() {
        return isUp;
    }
    
    public void setIsUp(Boolean isUp) {
        this.isUp = isUp;
    }
    
    public Boolean getIsReview() {
        return isReview;
    }
    
    public void setIsReview(Boolean isReview) {
        this.isReview = isReview;
    }
    
    public Boolean getIsDeclare() {
        return isDeclare;
    }
    
    public void setIsDeclare(Boolean isDeclare) {
        this.isDeclare = isDeclare;
    }
    
    public Boolean getIsPublic() {
        return isPublic;
    }
    
    public void setIsPublic(Boolean isPublic) {
        this.isPublic = isPublic;
    }
    
    public Boolean getIsDraft() {
        return isDraft;
    }
    
    public void setIsDraft(Boolean isDraft) {
        this.isDraft = isDraft;
    }
    
    public Integer getWords() {
        return words;
    }
    
    public void setWords(Integer words) {
        this.words = words;
    }
    
    public String getDuration() {
        return duration;
    }
    
    public void setDuration(String duration) {
        this.duration = duration;
    }
    
    public Integer getHits() {
        return hits;
    }
    
    public void setHits(Integer hits) {
        this.hits = hits;
    }
    
    public String getContent() {
        return content;
    }
    
    public void setContent(String content) {
        this.content = content;
    }
    
    public String getContentMd() {
        return contentMd;
    }
    
    public void setContentMd(String contentMd) {
        this.contentMd = contentMd;
    }
    
    public String getContentHtml() {
        return contentHtml;
    }
    
    public void setContentHtml(String contentHtml) {
        this.contentHtml = contentHtml;
    }
    
    public String getHref() {
        return href;
    }
    
    public void setHref(String href) {
        this.href = href;
    }
    
    public String getAbout() {
        
        return about;
    }
    
    public void setAbout(String about) {
        
        this.about = about;
    }
    
}
