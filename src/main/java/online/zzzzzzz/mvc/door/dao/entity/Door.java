package online.zzzzzzz.mvc.door.dao.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * 通过IP控制客户端功能访问次数
 * @TableName door
 */

public class Door implements Serializable {
    /**
     * 主键
     */
    private Integer id;

    /**
     * 客户端ip地址
     */
    private String ip;

    /**
     * 单位时间内的开始时间
     */
    private Date initiate;

    /**
     * 单位时间内的结束时间
     */
    private Date finish;

    /**
     * 单位时间中允许访问次数
     */
    private Integer num;

    /**
     * 当天日期
     */
    private Date today;

    /**
     * 当天最大访问次数
     */
    private Integer total;

    /**
     * 是否可访问锁
     */
    private Boolean allow;

    /**
     * 控制访问类型（留言版留言：1）
     */
    private Integer type;

    private static final long serialVersionUID = 1L;

    /**
     * 主键
     */
    public Integer getId() {
        return id;
    }

    /**
     * 主键
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 客户端ip地址
     */
    public String getIp() {
        return ip;
    }

    /**
     * 客户端ip地址
     */
    public void setIp(String ip) {
        this.ip = ip;
    }

    /**
     * 单位时间内的开始时间
     */
    public Date getInitiate() {
        return initiate;
    }

    /**
     * 单位时间内的开始时间
     */
    public void setInitiate(Date initiate) {
        this.initiate = initiate;
    }

    /**
     * 单位时间内的结束时间
     */
    public Date getFinish() {
        return finish;
    }

    /**
     * 单位时间内的结束时间
     */
    public void setFinish(Date finish) {
        this.finish = finish;
    }

    /**
     * 单位时间中允许访问次数
     */
    public Integer getNum() {
        return num;
    }

    /**
     * 单位时间中允许访问次数
     */
    public void setNum(Integer num) {
        this.num = num;
    }

    /**
     * 当天日期
     */
    public Date getToday() {
        return today;
    }

    /**
     * 当天日期
     */
    public void setToday(Date today) {
        this.today = today;
    }

    /**
     * 当天最大访问次数
     */
    public Integer getTotal() {
        return total;
    }

    /**
     * 当天最大访问次数
     */
    public void setTotal(Integer total) {
        this.total = total;
    }

    /**
     * 是否可访问锁
     */
    public Boolean getAllow() {
        return allow;
    }

    /**
     * 是否可访问锁
     */
    public void setAllow(Boolean allow) {
        this.allow = allow;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }



}