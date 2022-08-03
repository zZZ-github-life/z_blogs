package online.zouxiaolong.comment;

import org.apache.commons.lang.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.safety.Whitelist;

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
    
    
}
