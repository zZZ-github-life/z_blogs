package online.zouxiaolong.comment;



import online.zouxiaolong.basics.exception.MsgException;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.Objects;
import java.util.Properties;
import java.util.UUID;

/**
 * @description  全局工具
 * @author  zZZ....
 * @date  2021-07-12
 */

public class Cus_Global {
    
    /**
     *windows 磁盘根符号
     */
    private static String fileDrive;
    
    /**
     * 文件根目录
     */
    private static String filePath;
    
    /**
     * 抽象路劲根符号
     */
    private static String absPath;
    
    private static Properties cusProperties;
    

    
    static {
    
        try {
            cusProperties = new Properties();
            cusProperties.load(new InputStreamReader(Objects.requireNonNull(Cus_Global.class.getClassLoader().getResourceAsStream("/properties/blog.properties")), StandardCharsets.UTF_8));
            fileDrive= cusProperties.getProperty("file.drive","D:\\");
            filePath= cusProperties.getProperty("file.path","blogFile");
            absPath = cusProperties.getProperty("file.absPath","downLoadFile");
    
        }catch (Exception e){
            throw new MsgException("blog.properties load failed...");
        }
        
    
    }
    
    
    
    
    public static boolean isWindows(){
        return  System.getProperty("os.name").toLowerCase().contains("window");
    }
    
    public static String fileDrive(){
        if (isWindows()){
            return fileDrive;
        }else {
            return "/";
        }
    }
    
    /**
     * 文件真实路劲
     * @return 盘符和根目录
     * @throws IOException io
     */
    public static String fileRootPath() throws IOException {
    
        File file = new File(fileDrive() + filePath);
        if ( (!file.exists()) && !file.mkdirs()){
            throw new MsgException("创建文件夹失败...");
        }else {
            return fileDrive()+filePath;
        }
       
    }
    
    public static boolean createDir(String dirPath){
        File file = new File(dirPath);
        if (file.exists()){
            return true;
        }else {
           return file.mkdirs();
        }
    }
    
    /**
     * 获取图片
     * @param path 文件夹
     * @param suffix 后缀，忘了为啥使用可变参
     * @return 绝对路劲
     * @throws IOException io
     */
    public static String  getFileName(String path,String... suffix) throws IOException{
        String su;
       if (suffix.length>0){
           su = suffix[0];
       }else {
           su=".jpg";
       }
        String randomFileName = UUID.randomUUID().toString().replace("-", "")+su;
        return fileRootPath()+path+"/"+randomFileName;
    }
    
    /**
     * 获取抽象路劲
     * @return
     */
    public static String getAbsPath(String realFilePath) throws IOException{
        return absPath+realFilePath.substring( realFilePath.indexOf(fileRootPath())+fileRootPath().length()).replaceAll("\\\\","/");
     
    }
    
    
    public static Properties getCusProperties(){
        return cusProperties;
    }
    
    /**
     * 获取request对象
     * @return request
     */
    public static HttpServletRequest getRequest(){
        return  ((ServletRequestAttributes) Objects.requireNonNull(RequestContextHolder.getRequestAttributes())).getRequest();
    }
    
    /**
     * 防止文件名重复
     * @param file 文件
     * @param i 从0开始，加1
     * @return 文件
     */
   public static File getDiffFile(File file,int i){
      
        if (!file.exists()){
            return file;
        }else {
            i++;
            String path = file.getPath();
            int index = path.lastIndexOf(".");
            String s = path.substring(0, index) + "(" + i + ")"+path.substring(index);
            File file1 = new File(s);
            return getDiffFile(file1,i);
            
        }
      
    }
}
