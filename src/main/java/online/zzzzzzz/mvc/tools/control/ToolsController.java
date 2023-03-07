package online.zzzzzzz.mvc.tools.control;

import online.zzzzzzz.basics.controller.BaseController;
import online.zzzzzzz.basics.entity.Page;
import online.zzzzzzz.basics.entity.RepJson;
import online.zzzzzzz.mvc.tools.dao.ToolsMapper;
import online.zzzzzzz.mvc.tools.dao.entity.BlogTools;
import online.zzzzzzz.mvc.tools.service.ToolsService;
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
@RequestMapping("/toolsController")
public class ToolsController extends BaseController {
    
    @Autowired
    private ToolsService toolsService;
    
    @Autowired
    private ToolsMapper toolsMapper;
    
    @ResponseBody
    @RequestMapping("/list")
    public RepJson list(Page<BlogTools> page) {
        
        RepJson repJson = new RepJson();
        try {
            Integer count = toolsService.findPageWithCount(page);
            List<BlogTools> pageWithResult = toolsService.findPageWithResult(page);
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
    public RepJson save(BlogTools blogTools) {
        RepJson repJson = new RepJson();
        try {
            if (blogTools.getId() == null){
                toolsService.insert(blogTools);
            }else {
                toolsService.update(blogTools);
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
            toolsService.delete(id);
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
            List<Map> blogTools = toolsService.getNumAndName();
            repJson.setData(blogTools);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
            
        }
        return repJson;
    }
    
    @ResponseBody
    @RequestMapping("heap")
    public RepJson heap(Integer id) {
        
        RepJson repJson = new RepJson();
        try {
            toolsMapper.heap(id);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
    
}
