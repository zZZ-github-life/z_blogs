package online.zzzzzzz.basics.entity;

/**
 * 响应数据实体类
 *
 *  返回的对象中，如果不必要的字段不反回，可以通过@JsonIgnoreProperties来过滤，如果需要返回，一定要确保返回的字段有set,get方法。
 */
public class RepJson {

    private Object data; //响应数据
    private boolean success=true;  //是否成功
    private int code=0;   // 成功：0，失败：1，其他后续  请先设置success再设置code
    private String msg;  //失败原因
    
    public RepJson() {
    
    }
    
    public RepJson(Object data) {
        
        this.data = data;
    }
    
    public RepJson(Object data, boolean success) {
        
        this.data = data;
        this.success = success;
    }
    
    public RepJson(boolean success, int code, String msg) {
        
        this.success = success;
        this.code = code;
        this.msg = msg;
    }
    
    public RepJson(Object data, boolean success, int code, String msg) {
        
        this.data = data;
        this.success = success;
        this.code = code;
        this.msg = msg;
    }
    
    public Object getData() {
        
        return data;
    }
    
    public void setData(Object data) {
        
        this.data = data;
    }
    
    public boolean isSuccess() {
        
        return success;
    }
    
    public void setSuccess(boolean success) {
        
        this.success = success;
        if (success) code=0;
        else code=1;
    }
    
    public int getCode() {
        
        return code;
    }
    
    public void setCode(int code) {
        
        this.code = code;
    }
    
    public String getMsg() {
        
        return msg;
    }
    
    public void setMsg(String msg) {
        
        this.msg = msg;
    }
    
  
    
}
