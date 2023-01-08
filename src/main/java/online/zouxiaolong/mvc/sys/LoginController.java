package online.zouxiaolong.mvc.sys;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @description  登陆接口
 * @author  zZZ....
 * @date  2021-07-12
 */
@Controller
public class LoginController {
    
   
    
    //所有重定向过来的url都需要判断是否登陆过？
    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public String login(@RequestParam("loginName")String loginName,@RequestParam("password") String password) {
    
        String user ="admin";
        Subject currentSub = SecurityUtils.getSubject();
        if (!currentSub.isAuthenticated()){  //是否认证
            UsernamePasswordToken token = new UsernamePasswordToken("admin", "admin");
            token.setRememberMe(true);
            currentSub.login(token);
            
        }else {
            return "index_1";
        }
        
        return "index_1";
    }
    
    @GetMapping("/login")
    public String getLogin(){
        Subject currentSub = SecurityUtils.getSubject();
        if (currentSub.isAuthenticated()){
            return "index_1";
        }
        return "login";
    }
    
    
}
