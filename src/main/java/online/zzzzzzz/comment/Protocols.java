package online.zzzzzzz.comment;



import java.nio.charset.StandardCharsets;
import java.util.Map;

/**
 * 客户端与服务端发送数据的协议格式。
 * 客户端首次连接需要校验登录，之后直接发送数据即可，超时时间内可发送心跳包保持长连接。
 */
public class Protocols {


    private String url;
    private String method;
    private Map<String,Object> heads;
    private String body;

    private String username;
    private String password;
    private String id;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public Map<String, Object> getHeads() {
        return heads;
    }

    public void setHeads(Map<String, Object> heads) {
        this.heads = heads;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    /**
     * 协议格式如下：
     *
     *  Uhttps://www.google.com/\r\n
     *  MPost\r\n
     *  B{"name":"name","password":"password"}\r\n
     *  Nname\r\n
     *  Ppassword\r\n
     *  Hconten-type:application-json\r\n
     *
     *
     *  每部分以\r\n换行，每行首位大写字母表示协议内容格式，后面紧跟协议内容，每次请求都要带上账号密码，\r\n\r\n 表示单次消息发送完毕
     *  单次消息大小maxBytes
     */
    public interface First{
        final static String url ="U";
        final static String body ="B";
        final static String method ="M";
        final static String heard ="H";

        final static String username ="N";
        final static String password ="P";
        final static String id ="I";
        final static String isHttps ="S";
        String hSeparator =":";

        final static int maxBytes=1024*10; //一次请求消息最大长度


    }


    public interface Two{

        byte[] username = Three.username.getBytes(StandardCharsets.UTF_8);
        byte[] password = Three.password.getBytes(StandardCharsets.UTF_8);


        byte[] heartbeat = Three.heartbeat.getBytes(StandardCharsets.UTF_8);

        byte[] end = Three.end.getBytes(StandardCharsets.UTF_8);

        byte[] separator = Three.separator.getBytes(StandardCharsets.UTF_8);
        byte hSeparator =':';
    }

    public interface Three{
        String username = "Kdi@#kek%*.29:,E23";
        String password = "3eo@04.Lkje3g>pexd&r";
        String separator = "\r\n";
        String end = "\r\n\r\n";
        String heartbeat = "CAFEBABE";



    }
}
