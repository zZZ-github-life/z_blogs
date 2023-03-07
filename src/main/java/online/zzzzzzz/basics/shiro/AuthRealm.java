package online.zzzzzzz.basics.shiro;

import org.apache.shiro.authc.*;
import org.apache.shiro.realm.AuthenticatingRealm;

/**
 * @description 真正实现登陆逻辑接口
 * @author  zZZ....
 * @date  2021-08-09
 *
 */

public class AuthRealm extends AuthenticatingRealm {
    
    
    
    
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
    
       
        UsernamePasswordToken upt = (UsernamePasswordToken)authenticationToken;
    
        String username = upt.getUsername();
        
        if (!"zBlog".equals(username)){
            throw new UnknownAccountException("用户名或密码错误");
        }
        
        return new SimpleAuthenticationInfo(username,"540@207#154!",getName());
    }
    
}
