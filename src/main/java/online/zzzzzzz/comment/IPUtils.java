package online.zzzzzzz.comment;

import org.apache.commons.lang3.StringUtils;
import org.lionsoul.ip2region.xdb.Searcher;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * @author zZZ....
 * @description 获取客户端IP地址
 * @date 2022/12/22
 */
public class IPUtils {
    final static String UNKNOWN = "unknown";
    final static String[] matchOptions = {"x-forwarded-for", "Proxy-Client-IP", "WL-Proxy-Client-IP", "HTTP_CLIENT_IP", "HTTP_X_FORWARDED_FOR"};
    
    /**
     * 获取客户端的真实ip地址
     * @param httpServletRequest httpServletRequest
     * @return ip
     */
    public static String getIpAddress(HttpServletRequest httpServletRequest) {
        
         
         int size = matchOptions.length;
        try {
            if (httpServletRequest==null){
                httpServletRequest = Global.getRequest();
            }
          
            String ip = UNKNOWN;
            
            int index = 0;
            while(index < size && (StringUtils.isEmpty(ip) || UNKNOWN.equalsIgnoreCase(ip))){
                ip = httpServletRequest.getHeader(matchOptions[index]);
                index++;
            }
            
            if (StringUtils.isEmpty(ip) || UNKNOWN.equalsIgnoreCase(ip)) {
                ip = httpServletRequest.getRemoteAddr();
            }
            
            if (!StringUtils.isEmpty(ip) && !UNKNOWN.equalsIgnoreCase(ip) && ip.length() > 15) {
                String[] ips = ip.split(",");
                int len = ips.length;
                for (int i = 0; i < len; i++) {
                    String strIp = ips[index];
                    if (!(UNKNOWN.equalsIgnoreCase(strIp))) {
                        ip = strIp;
                        break;
                    }
                }
            }
            
            return ip==null?UNKNOWN:ip;
        } catch (Exception e) {
            return UNKNOWN;
        }
    }
    
    /**
     * 获取ip和城市
     * @param httpServletRequest httpServletRequest
     * @return
     */
    public static Map<String,Object> getIPAndCity(HttpServletRequest httpServletRequest){
        Searcher searcher=null;
        try {
            String ipAddress = getIpAddress(httpServletRequest);
            if (StringUtils.isNotBlank(ipAddress) && !UNKNOWN.equals(ipAddress)){
                String dbPath = IPUtils.class.getClassLoader().getResource("/ip/ip2region.xdb").getPath();
                searcher = Searcher.newWithFileOnly(dbPath);
                HashMap<String, Object> hashMap = new HashMap<>();
                String search = searcher.search(ipAddress);
                String[] split = search.split("\\|");
                hashMap.put("ip",ipAddress);
                hashMap.put("city", split[2]+split[3]);
                return hashMap;
            }
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            try {
                if (searcher!=null){
                    searcher.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
       return null;
    }
    
    /**
     * 提供外部的业务处理接口
     * @param dispose 处理业务的回调函数
     * @return
     */
    public static void  process(Dispose dispose){
        Searcher searcher=null;
        try {
            String dbPath = IPUtils.class.getClassLoader().getResource("/ip/ip2region.xdb").getPath();
            searcher = Searcher.newWithFileOnly(dbPath);
            dispose.deal(searcher);
            
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            try {
                if (searcher!=null){
                    searcher.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
    
    
    @FunctionalInterface
    public interface Dispose{
        void deal(Searcher searcher) throws Exception;
    }
    
}
