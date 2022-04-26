package online.zouxiaolong.mvc.guestbook.dao.entity;

/**
 * @author zZZ....
 * @description 留言板
 * @date 2022/3/14
 */

import com.fasterxml.jackson.annotation.JsonFormat;
import online.zouxiaolong.basics.entity.BaseEntity;

import java.util.Date;
import java.util.List;

public class BlogGuestBook extends BaseEntity {
    
        /**
         * 昵称
         */
        private String nickname;
        
        /**
         * 邮箱
         */
        private String email;
        
        /**
         * 链接
         */
        private String link;
        
        /**
         * 头像
         */
        private String headShot;
        
        /**
         * 浏览器版本
         */
        private String browserVersion;
        
        /**
         * 操作系统版本
         */
        private String osVersion;
        
        /**
         * 来自--地址
         */
        private String address;
        /**
         * 来自--ip
         */
        private String ip;
        
        /**
         * 评论内容
         */
        private String content;
        
        /**
         * 评论人员身份
         */
        private String idCard;
        
        /**
         * 评论时间
         */
        private Date createDate;
        
        /**
         * 博客id(为-1时表示留言板评论)
         */
        private Integer blogId;
        
        /**
         * 父级id(为null时表示顶层评论，分两层)
         */
        private Integer parentId;
    
    
        /**
         * 所有父级id（方便查找）
         */
        private String parentIds;
        
        List<BlogGuestBook>  gBChildren;
        
        public Integer getId() {
            return id;
        }
        
        public void setId(Integer id) {
            this.id = id;
        }
        
        public String getNickname() {
            return nickname;
        }
        
        public void setNickname(String nickname) {
            this.nickname = nickname;
        }
        
        public String getEmail() {
            return email;
        }
        
        public void setEmail(String email) {
            this.email = email;
        }
        
        public String getLink() {
            return link;
        }
        
        public void setLink(String link) {
            this.link = link;
        }
        
        public String getHeadShot() {
            return headShot;
        }
        
        public void setHeadShot(String headShot) {
            this.headShot = headShot;
        }
        
        public String getBrowserVersion() {
            return browserVersion;
        }
        
        public void setBrowserVersion(String browserVersion) {
            this.browserVersion = browserVersion;
        }
        
        public String getOsVersion() {
            return osVersion;
        }
        
        public void setOsVersion(String osVersion) {
            this.osVersion = osVersion;
        }
        
        public String getAddress() {
            return address;
        }
        
        public void setAddress(String address) {
            this.address = address;
        }
        
        public String getContent() {
            return content;
        }
        
        public void setContent(String content) {
            this.content = content;
        }
        
        public String getIdCard() {
            return idCard;
        }
        
        public void setIdCard(String idCard) {
            this.idCard = idCard;
        }
        
        @JsonFormat(pattern="yyyy-MM-dd", timezone = "GMT+8")
        public Date getCreateDate() {
            return createDate;
        }
        
        public void setCreateDate(Date createDate) {
            this.createDate = createDate;
        }
    
        public Integer getBlogId() {
            
            return blogId;
        }
        
        public void setBlogId(Integer blogId) {
            
            this.blogId = blogId;
        }
    
        public Integer getParentId() {
            return parentId;
        }
        
        public void setParentId(Integer parentId) {
            this.parentId = parentId;
        }
    
        public String getIp() {
            return ip;
        }
        
        public void setIp(String ip) {
            this.ip = ip;
        }
    
        public List<BlogGuestBook> getgBChildren() {
            
            return gBChildren;
        }
    
        public void setgBChildren(List<BlogGuestBook> gBChildren) {
            
            this.gBChildren = gBChildren;
        }
        
        public String getParentIds() {
            
            return parentIds;
        }
        
        public void setParentIds(String parentIds) {
            
            this.parentIds = parentIds;
        }
        
}