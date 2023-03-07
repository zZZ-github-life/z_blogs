package online.zzzzzzz.mvc.guestbook.service;


import online.zzzzzzz.basics.entity.Page;
import online.zzzzzzz.basics.service.BaseService;
import online.zzzzzzz.comment.Constant;
import online.zzzzzzz.mvc.guestbook.dao.GuestBookMapper;
import online.zzzzzzz.mvc.guestbook.dao.entity.BlogGuestBook;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author zZZ....
 * @description 留言板
 * @date 2022/3/14
 */
@Service
public class GuestBookService extends BaseService<GuestBookMapper, BlogGuestBook> {
    
    /**
     * 分页 封装二级树形留言列表
     * @param page
     * @return
     */
    
    public Page<BlogGuestBook>  list(Page<BlogGuestBook> page) {
    
        Integer count = mapper.findPageTopCount(page);
        List<BlogGuestBook> topList = mapper.findPageTop(page); //集合过大时会严重 影响 下面循环执行效率，待优化
        for (BlogGuestBook blogGuestBook : topList) {
            blogGuestBook.setgBChildren(mapper.findChildrenByTop(blogGuestBook.getId()+""));
        }
        page.setList(topList);
        page.setTotal(count);
        return page;
    }
    
    public List<BlogGuestBook> topList(Page<BlogGuestBook> page){
        List<BlogGuestBook> topList = mapper.findPageTop(page); //集合过大时会严重 影响 下面循环执行效率，待优化
        for (BlogGuestBook blogGuestBook : topList) {
            blogGuestBook.setgBChildren(mapper.findChildrenByTop(blogGuestBook.getId()+""));
        }
        return topList;
    }
    
    public Map<String,Object> listPage(Page<BlogGuestBook> page) {
    
       
        Integer count = mapper.findPageTopCount(page);
        List<BlogGuestBook> topList = mapper.findPageTop(page); //集合过大时会严重 影响 下面循环执行效率，待优化
        StringBuilder sb = new StringBuilder();
        HashMap<String, Object> map = new HashMap<>();
        for (BlogGuestBook blogGuestBook : topList) {
            sb.append(Constant.guestBookCard1).append(blogGuestBook.getId())
                    .append(Constant.guestBookCard2).append(blogGuestBook.getHeadShot())
                    .append(Constant.guestBookCard3).append(blogGuestBook.getLink())
                    .append(Constant.guestBookCard4).append(blogGuestBook.getNickname())
                    .append(Constant.guestBookCard5).append(blogGuestBook.getIdCard())
                    .append(Constant.guestBookCard6).append(blogGuestBook.getBrowserVersion())
                    .append(Constant.guestBookCard7).append(blogGuestBook.getOsVersion())
                    .append(Constant.guestBookCard7_1).append(StringUtils.isBlank(blogGuestBook.getAddress())?"未知":blogGuestBook.getAddress())
                    .append(Constant.guestBookCard8).append(new SimpleDateFormat("yyyy-MM-dd").format(blogGuestBook.getCreateDate()))
                    .append(Constant.guestBookCard9).append(blogGuestBook.getId())
                    .append(Constant.guestBookCard10).append(blogGuestBook.getId())
                    .append(Constant.guestBookCard11).append(blogGuestBook.getContent())
                    .append(Constant.guestBookCard12).append(blogGuestBook.getId())
                    .append(Constant.guestBookCard13).append(blogGuestBook.getId()).append(Constant.guestBookCard14);
    
            List<BlogGuestBook> gBChildren = mapper.findChildrenByTop("" + blogGuestBook.getId());
            for (BlogGuestBook chilren : gBChildren) {
                sb.append(Constant.guestBookCard1).append(chilren.getId())
                        .append(Constant.guestBookCard2).append(chilren.getHeadShot())
                        .append(Constant.guestBookCard3).append(chilren.getLink())
                        .append(Constant.guestBookCard4).append(chilren.getNickname())
                        .append(Constant.guestBookCard5).append(chilren.getIdCard())
                        .append(Constant.guestBookCard6).append(chilren.getBrowserVersion())
                        .append(Constant.guestBookCard7).append(chilren.getOsVersion())
                        .append(Constant.guestBookCard7_1).append(StringUtils.isBlank(blogGuestBook.getAddress())?"未知":blogGuestBook.getAddress())
                        .append(Constant.guestBookCard8).append(new SimpleDateFormat("yyyy-MM-dd").format(blogGuestBook.getCreateDate()))
                        .append(Constant.guestBookCard9).append(blogGuestBook.getId())
                        .append(Constant.guestBookCard10).append(chilren.getId())
                        .append(Constant.guestBookCard11).append(chilren.getContent())
                        .append(Constant.guestBookCard12).append(chilren.getId())
                        .append(Constant.guestBookCard13).append(chilren.getId()).append(Constant.guestBookCard15);
            }
          sb.append(Constant.guestBookCard16);
        }
        
   
        map.put("list",sb.toString());
        map.put("size",topList.size());
        map.put("total",count);
        return map;
    }
    
    
    
    public int findPageTopCount(Page<BlogGuestBook> page) {
        return mapper.findPageTopCount(page);
    }
    public List<BlogGuestBook> getListById(Integer id){
        return mapper.getListById(id);
    }
    public List<BlogGuestBook> getListTopParent(Integer id){
        return mapper.getListById(id);
    }
    public List<BlogGuestBook> getChildById(Integer id){
        return mapper.getChildById(id);
    }
    public Integer getTopParentId(Integer id){
        return mapper.getTopParentId(id);
    }
    public Integer recycle(Integer id){
        return mapper.recycle(id);
    }
}
