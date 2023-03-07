package online.zzzzzzz.mvc.tags.control;

import online.zzzzzzz.basics.controller.BaseController;
import online.zzzzzzz.basics.entity.Page;
import online.zzzzzzz.basics.entity.RepJson;

import online.zzzzzzz.mvc.tags.dao.entity.BlogTags;
import online.zzzzzzz.mvc.tags.service.TagsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;


/**
 * @author zZZ....
 * @description 标签页
 * @date 2022/3/13
 */

@Controller
@RequestMapping("/tagsController")
public class TagsController extends BaseController {
    
    @Autowired
    private TagsService tagsService;
    
    @ResponseBody
    @RequestMapping("/list")
    public RepJson list(Page<BlogTags> page) {
        
        RepJson repJson = new RepJson();
        try {
            Integer count = tagsService.findPageWithCount(page);
            List<BlogTags> pageWithResult = tagsService.findPageWithResult(page);
            page.setList(pageWithResult);
            page.setTotal(count);
            repJson.setData(page);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
            
            
        }
        return repJson;
    }
    
    @ResponseBody
    @RequestMapping("/save")
    public RepJson save(BlogTags blogTags) {
        RepJson repJson = new RepJson();
        try {
            if (blogTags.getId() == null){
                tagsService.insert(blogTags);
            }else {
                tagsService.update(blogTags);
            }
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
            
        }
        return repJson;
    }
    @ResponseBody
    @RequestMapping("/delete")
    public RepJson delete(Integer id) {
        
        RepJson repJson = new RepJson();
        try {
            tagsService.delete(id);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
            
        }
        return repJson;
    }
    
    @ResponseBody
    @RequestMapping("/getNumAndName")
    public RepJson getNumAndName() {
        
        RepJson repJson = new RepJson();
        try {
            List<Map> blogTags = tagsService.getNumAndName();
            repJson.setData(blogTags);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
            
        }
        return repJson;
    }
    
    
}
