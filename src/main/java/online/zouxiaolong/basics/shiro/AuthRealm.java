package online.zouxiaolong.basics.shiro;

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
    
        SimpleAuthenticationInfo simpleAuthenticationInfo = new SimpleAuthenticationInfo(upt.getPrincipal(),upt.getCredentials(),getName());
        
        return simpleAuthenticationInfo;
    }
    
}
