package online.zzzzzzz.mvc.sys;

import online.zzzzzzz.basics.entity.RepJson;
import online.zzzzzzz.basics.exception.MsgException;
import online.zzzzzzz.comment.Constant;
import online.zzzzzzz.comment.Global;
import online.zzzzzzz.comment.Tools;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

/**
 * @description  登陆接口
 * @author  zZZ....
 * @date  2021-07-12
 */
@Controller
public class LoginController {
    
    /**
     * 存储验证码，同一用户 key相同，登陆成功时异步清除。 value为验证码
     * GC时自动回收无用数据
     * 存在线程安全问题，线程同步
     * 性能较低，考虑自动清理机制，未考虑conCurrentHashMap
     */
    private final Map<String, String> codes = Collections.synchronizedMap(new WeakHashMap<>());
    
    private final Random randObj = new Random();
    
    /**
     * 单点登陆
     * @param loginName 用户名
     * @param password 密码
     * @param code 验证码
     * @return 响应结果 2:验证码错误，3：用户密码错误，4：其他登陆异常
     */
    @ResponseBody
    @RequestMapping(value = "/SSO",method = RequestMethod.POST)
    public RepJson login(@RequestParam(value = "loginName")String loginName,
                        @RequestParam(value = "password") String password ,
                        @RequestParam(value = "code")String code,
                        HttpServletRequest request) {
        RepJson json = new RepJson();
    
        try {
            Subject currentSub = SecurityUtils.getSubject();
            if (!currentSub.isAuthenticated()){  //没有认证
              
                Cookie c ;
                if (StringUtils.isBlank(code) || (c= Tools.getCookie(request, Constant.CAPTCHA))==null || !code.equalsIgnoreCase(codes.get(c.getValue()))){
                    throw new MsgException("验证码错误");
                }
                UsernamePasswordToken token = new UsernamePasswordToken(loginName, password);
                token.setRememberMe(true);
                currentSub.login(token);  //认证失败则抛出异常
                currentSub.getSession().setTimeout(1000*60*60*4);  //登录过期时长4h
                Global.singleThreadExecutor.execute(() -> {
                    try {
                        Cookie cookie = Tools.getCookie(request, Constant.CAPTCHA);
                        if (cookie!=null){
                            codes.remove(cookie.getValue());
                        }
                    }catch (Exception e){
                        e.printStackTrace();
                    }
                
                });
            }
            
        }catch (MsgException e){
            e.printStackTrace();
            json.setSuccess(false);
            json.setCode(2);
            json.setMsg(e.getMessage());
        }catch (AuthenticationException e){
            e.printStackTrace();
            json.setSuccess(false);
            json.setCode(3);
            json.setMsg("用户名或密码错误");
        }catch (Exception e){
            e.printStackTrace();
            json.setSuccess(false);
            json.setCode(4);
            json.setMsg("登陆失败!");
        }
        return json;
    }
    
    /**
     * 登陆成功之后跳转到该地址
     * @return 首页
     */
    @RequestMapping("home")
    public String home() {
        Subject subject = SecurityUtils.getSubject();
        if (subject==null || !subject.isAuthenticated()){
            return "login";
        }
        return "index";
    }
    
    
    /**
     * 所有未经授权的 资源都将被重定向到此url
     * @return 登陆页
     */
    @RequestMapping("/login")
    public String login(HttpServletRequest request,HttpServletResponse response) {
        
        try {
            Subject subject = SecurityUtils.getSubject();
            if (subject!=null && subject.isAuthenticated()){
              return "index";
            }
            Cookie cookie;
            if ((cookie = Tools.getCookie(request,Constant.CAPTCHA))==null) {
                cookie = new Cookie(Constant.CAPTCHA, UUID.randomUUID().toString());
            }
            cookie.setHttpOnly(true);
    
            response.addCookie(cookie);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "login";
    }
    
    /**
     * 登出
     * @return 登录页
     */
    @RequestMapping("logout")
    public String logout() {
        
        try {
            Subject subject = SecurityUtils.getSubject();
            if (subject!=null){
                subject.logout();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "login";
    }
    
    /**
     * 生成验证码
     * @param request 验证cookie是否同一用户。是否存在恶意调用
     * @return 验证码
     */
    @ResponseBody
    @GetMapping("vCode")
    public RepJson vCode(HttpServletRequest request) {
        
        RepJson repJson = new RepJson();
        try {
            Cookie cookie = Tools.getCookie(request, Constant.CAPTCHA);
            if (cookie==null){
                repJson.setSuccess(false);
                return repJson;
            }
            String code = generateCode4();
            codes.put(cookie.getValue(),code);
            repJson.setData(code);
        } catch (Exception e) {
            e.printStackTrace();
            repJson.setSuccess(false);
        }
        return repJson;
    }
    
    
    // 生成6位随机验证码
    public String generateCode() {
        return Integer.toString(100000 + randObj.nextInt(900000));
    }
    // 生成4位随机验证码
    public String generateCode4() {
        return Integer.toString(1000 + randObj.nextInt(9000));
    }
    
}
