package online.zzzzzzz.basics.listener;

import online.zzzzzzz.comment.Global;
import online.zzzzzzz.mvc.blogs.service.BlogBlogsService;
import online.zzzzzzz.mvc.chat.ChatController;
import online.zzzzzzz.mvc.sys.Task;
import online.zzzzzzz.mvc.sys.dao.SysMapper;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

/**
 * @author zZZ....
 * @description spring启动完成后加载资源
 * @date 2022/12/22
 */
public class InitResource   {
    public static AtomicLong PV =new AtomicLong(); //浏览量
    public static AtomicLong TV =new AtomicLong(); //访问量
    public static AtomicLong UV =new AtomicLong(); //访问人数
    public static AtomicLong WC =new AtomicLong(); //字数统计
    
    @Autowired
    public  ServletContext sc;
    public static ServletContext servletContext;

    public static Map<String,String> config; //隐私配置

    @Autowired
    private SysMapper sysMapper;
    
    @Autowired
    private BlogBlogsService blogBlogsService;




    @PostConstruct
    public void PostConstruct() {
    
       List<Map<String, Object>> list = sysMapper.getAll();
        if (list!=null ){
            for (Map<String, Object> all : list) {
                String name = (String) all.get("name");
                switch (name){
                    case "TV": TV=new AtomicLong(Long.parseLong((String) all.get("num")) );break;
                    case "PV": PV=new AtomicLong(Long.parseLong((String) all.get("num")) );break;
                    case "UV": UV=new AtomicLong(Long.parseLong((String) all.get("num")) );break;
                    default:break;
                }
            }
        }
        
        servletContext =sc;
        Integer wc = sysMapper.getWC();
        WC=new AtomicLong(wc!=null?wc:0);
    
        long start = System.currentTimeMillis();
        blogBlogsService.initHtml();
        long end = System.currentTimeMillis();
        System.out.println("生成博客站点页面耗时："+(end-start));


        //加载配置
        List<Map<String, String>> prs = sysMapper.getConfig();
        config=new HashMap<>();
        for (Map<String, String> pr : prs) {
            config.put(pr.get("key"),pr.get("value"));
        }

    }
    

    public void PreDestroy(){
        try {
            sysMapper.insertOrUpdate("PV",PV.toString());
            sysMapper.insertOrUpdate("TV",TV.toString());
            sysMapper.insertOrUpdate("UV",UV.toString());
            sysMapper.insertOrUpdate("WC",WC.toString());
    
            Global.singleThreadExecutor.shutdown();

            ChatController.timer.cancel();
            System.out.println("容器关闭");
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
