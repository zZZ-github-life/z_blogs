package online.zzzzzzz.comment;

import online.zzzzzzz.basics.annotation.NotEmpty;
import org.apache.commons.lang.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.safety.Whitelist;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

/**
 * @description  工具类
 * @author  zZZ....
 * @date  2021-07-12
 */
public class Tools {
    
    
    
    /**
     * 等比分隔list
     * @param list 需要切割的集合
     * @param pageSize 分成几等份
     * @param <T> 泛型
     * @return 分页后的集合
     */
    public static <T> List<List<T>> splitList(List<T> list, int pageSize) {
        List<List<T>> listArray = new ArrayList<List<T>>();
        for (int i = 0; i < list.size(); i+=pageSize) {
            int toIndex = Math.min(i + pageSize, list.size());
            listArray.add(list.subList(i, toIndex));
        }
        return listArray;
    }
    
    /**
     * html转文本
     * @param html html
     * @return 文本
     */
    public static String convert(String html)
    {
        if (StringUtils.isEmpty(html))
        {
            return "";
        }
        
        Document document = Jsoup.parse(html);
        Document.OutputSettings outputSettings = new Document.OutputSettings().prettyPrint(false);
        document.outputSettings(outputSettings);
        document.select("br").append("\\n");
        document.select("p").prepend("\\n");
        document.select("p").append("\\n");
        String newHtml = document.html().replaceAll("\\\\n", "\n");
        String plainText = Jsoup.clean(newHtml, "", Whitelist.none(), outputSettings);
        String result = StringEscapeUtils.unescapeHtml(plainText.trim());
        return result;
    }
    
    /**
     * 根据cookie名称检查是否存在
     * @param request HttpServletRequest
     * @param name cookie名称
     * @return 存在为true
     */
    public static boolean cookieIsExist(HttpServletRequest request,String name){
        Cookie[] cookies = request.getCookies();
        if (cookies!=null){
            for (Cookie cookie : cookies) {
                if (name.equals(cookie.getName())){
                   return true;
                }
            }
        
        }
        return false;
    }
    
    /**
     * 根据名称查找cookie
     * @param request HttpServletRequest
     * @param name cookie名称
     * @return cookie
     */
    public static Cookie getCookie(HttpServletRequest request,String name){
        Cookie[] cookies = request.getCookies();
        if (cookies!=null){
            for (Cookie cookie : cookies) {
                if (name.equals(cookie.getName())) {
                    return cookie;
                }
            }
        
            
        }
        return null;
    }
    
    
    /**
     * 根据名称查找cookie的值
     * @param request  HttpServletRequest
     * @param name  cookie名称
     * @return cookie的值
     */
    public static String getCookieValue(HttpServletRequest request,String name){
        Cookie[] cookies = request.getCookies();
        if (cookies!=null){
            for (Cookie cookie : cookies) {
                if (name.equals(cookie.getName())){
                    return cookie.getValue();
                }
            }
        }
        return null;
    }


    /**
     * 验证指定对象的属性是否为非空
     * @param object 需要验证的对象
     * @return 有空返回 false
     */
    public static boolean objectCheckIsNotNull(Object object) {

        if (object==null){
            return false;
        }
        Class<?> clazz = object.getClass(); // 得到类对象
            Field[] fields = clazz.getDeclaredFields(); // 得到所有属性
            for (Field field : fields) {
                field.setAccessible(true);
                Object fieldValue ;
                try {
                    boolean annotationPresent = field.isAnnotationPresent(NotEmpty.class);
                    if (annotationPresent &&  (fieldValue = field.get(object))!=null){
                        return !field.getGenericType().getTypeName().equals("java.lang.String") || !StringUtils.isBlank(fieldValue.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    return false;
                }


        }
        return true;
    }
}
