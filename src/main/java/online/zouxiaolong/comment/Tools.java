package online.zouxiaolong.comment;

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
}
