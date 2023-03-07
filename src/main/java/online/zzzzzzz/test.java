package online.zzzzzzz;

import org.lionsoul.ip2region.xdb.Searcher;

/**
 * @author zZZ....
 * @description
 * @date 2022/1/17
 */
public class test {
    
    public static void main(String[] args) throws Exception {
        Searcher  searcher = Searcher.newWithFileOnly("E:\\A_idea_project\\blogs\\z_blogs\\src\\main\\resources\\ip\\ip2region.xdb");
        String search = searcher.search("223.104.91.251");
        System.out.println(search);
    }
    
}
