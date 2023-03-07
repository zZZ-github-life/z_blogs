package online.zzzzzzz.mvc.sys;

import online.zzzzzzz.basics.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author zZZ....
 * @description
 * @date 2022/5/20
 */
@Controller
@RequestMapping("/pajx")
public class PajxController extends BaseController {


   
    
   
    @RequestMapping("/menu")
    public void addClient(String page) {
      //  sendHtml();
    }
}
