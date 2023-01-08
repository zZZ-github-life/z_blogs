package online.zouxiaolong;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.lionsoul.ip2region.xdb.Searcher;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

/**
 * @author zZZ....
 * @description
 * @date 2022/1/17
 */
public class test {
    String s ="";
    
    public static void main(String[] args) throws IOException {
        // 1、创建 searcher 对象
        String dbPath = "E:\\A_idea_project\\blogs\\z_blogs\\src\\main\\resources\\ip\\ip2region.xdb";
        Searcher searcher = null;
        try {
            searcher = Searcher.newWithFileOnly(dbPath);
        } catch (IOException e) {
            System.out.printf("failed to create searcher with `%s`: %s\n", dbPath, e);
            return;
        }
        String ip = "58.221.147.4";
        // 2、查询
        try {
          
            long sTime = System.nanoTime();
            String region = searcher.search(ip);
            long cost = TimeUnit.NANOSECONDS.toMicros((long) (System.nanoTime() - sTime));
            System.out.printf("{region: %s, ioCount: %d, took: %d μs}\n", region, searcher.getIOCount(), cost);
        } catch (Exception e) {
            System.out.printf("failed to search(%s): %s\n", ip, e);
        }
        
        // 3、关闭资源
        searcher.close();
        
        // 备注：并发使用，每个线程需要创建一个独立的 searcher 对象单独使用。
    }
    
    

    
}
