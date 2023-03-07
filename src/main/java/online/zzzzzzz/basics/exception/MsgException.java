package online.zzzzzzz.basics.exception;

/**
 * @description 前端异常提示
 * @author  zZZ....
 * @date  2021-07-25
 */
public class MsgException extends RuntimeException {
    
    private Object obj;
    
    public MsgException() {
    
    }
    
    public MsgException(String message) {
        
        super(message);
    }
    public MsgException(String message,Object obj) {
        
        super(message);
        this.obj=obj;
    }
    
    public MsgException(String message, Throwable cause) {
        
        super(message, cause);
    }
    
    public MsgException(Throwable cause) {
        
        super(cause);
    }
    
    public MsgException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        
        super(message, cause, enableSuppression, writableStackTrace);
    }
    
    public Object getObj() {
        
        return obj;
    }
    
  
    
}
