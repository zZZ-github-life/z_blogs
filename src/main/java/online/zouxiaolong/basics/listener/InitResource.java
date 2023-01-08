package online.zouxiaolong.basics.listener;

import online.zouxiaolong.mvc.sys.dao.SysMapper;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.util.Map;
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
    private SysMapper sysMapper;
    
    @PostConstruct
    public void PostConstruct() {
    
        Map<String, Object> all = sysMapper.getAll();
        if (all==null){
            return;
        }
        Integer tv = (Integer)all.get("TV");
        Integer pv = (Integer)all.get("PV");
        Integer uv = (Integer)all.get("UV");
        Integer wc = (Integer)all.get("WC");
        if (tv!=null && tv!=0){
            TV=new AtomicLong(tv);
        }
        if (pv!=null && pv!=0){
            PV=new AtomicLong(pv);
        }
        if (uv!=null && uv!=0){
            UV=new AtomicLong(uv);
        }
        if (wc!=null && wc!=0){
            WC=new AtomicLong(wc);
        }
    }
    

    public void PreDestroy(){
        sysMapper.insertOrUpdate("PV",PV.toString());
        sysMapper.insertOrUpdate("TV",TV.toString());
        sysMapper.insertOrUpdate("UV",UV.toString());
        sysMapper.insertOrUpdate("WC",WC.toString());
    }
}
