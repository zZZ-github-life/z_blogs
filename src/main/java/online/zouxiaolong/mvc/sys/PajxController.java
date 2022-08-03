package online.zouxiaolong.mvc.sys;

import online.zouxiaolong.basics.controller.BaseController;
import online.zouxiaolong.basics.entity.RepJson;
import online.zouxiaolong.basics.exception.MsgException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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
