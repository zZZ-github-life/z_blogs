package online.zzzzzzz.mvc.sys;

import online.zzzzzzz.basics.controller.BaseController;
import online.zzzzzzz.basics.entity.RepJson;
import online.zzzzzzz.mvc.blogs.service.BlogBlogsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author zZZ....
 * @description reload
 * @date 2022/5/20
 */
@Controller
@RequestMapping("/noAuth")
public class PajxController extends BaseController {

    @Autowired
    private BlogBlogsService blogBlogsService;

    @GetMapping("/hotLoad")
    public void addClient(String token) {
        if (!"raM9Eveb0DaOcoXc1F0FcyWqk8dSRyXqHnqsaCH42w4".equals(token)){
            return;
        }
        blogBlogsService.initHtml();
    }
   

}
