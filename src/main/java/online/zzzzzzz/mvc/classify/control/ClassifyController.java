package online.zzzzzzz.mvc.classify.control;

import online.zzzzzzz.basics.controller.BaseController;
import online.zzzzzzz.basics.entity.Page;
import online.zzzzzzz.basics.entity.RepJson;
import online.zzzzzzz.mvc.classify.dao.entity.BlogClassify;
import online.zzzzzzz.mvc.classify.service.ClassifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;


/**
 * @author zZZ....
 * @description
 * @date 2022/3/7
 */

@Controller
@RequestMapping("/classifyController")
public class ClassifyController extends BaseController {
    
    @Autowired
    private ClassifyService classifyService;
    
    @ResponseBody
    @RequestMapping("/list")
    public RepJson list(Page<BlogClassify> page) {
        
        RepJson repJson = new RepJson();
        try {
            Integer count = classifyService.findPageWithCount(page);
            List<BlogClassify> pageWithResult = classifyService.findPageWithResult(page);
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
    public RepJson save(BlogClassify blogClassify) {
        RepJson repJson = new RepJson();
        try {
            if (blogClassify.getId() == null){
                classifyService.insert(blogClassify);
            }else {
                classifyService.update(blogClassify);
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
            classifyService.delete(id);
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
            List<Map> blogClassify = classifyService.getNumAndName();
            repJson.setData(blogClassify);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
            
        }
        return repJson;
    }
    
    
}
