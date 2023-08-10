package online.zzzzzzz.mvc.chat;

import org.springframework.http.MediaType;
import org.springframework.lang.Nullable;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyEmitter;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.Set;

/**
 * @author zZZ.... <br/>
 * @description sse逻辑处理 <br/>
 * @date 2023/8/9$  <br/>
 */
public class SSEEntryProcessor implements Runnable{

    int timeout;

    private HttpServletRequest request;
    private HttpServletResponse response;

    public SSEEntryProcessor(int timeout){
        this.timeout=timeout;
    }

    public void send(){
        try {
            response.getWriter().print("");
        }catch (Exception e){
            e.printStackTrace();
        }

    }

    public SseEventBuilder event(){
       return new SseEventBuilder();
    }

    @Override
    public void run() {
        while (true){
            try {
                wait();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }

    }
    private static class SseEventBuilder  {

        @Nullable
        private StringBuilder sb;
        private StringBuilder date;

        private SseEventBuilder() {

        }

        public SSEEntryProcessor.SseEventBuilder id(String id) {
            this.append("id:").append(id).append("\n");
            return this;
        }

        public SSEEntryProcessor.SseEventBuilder name(String name) {
            this.append("event:").append(name).append("\n");
            return this;
        }

        public SSEEntryProcessor.SseEventBuilder reconnectTime(long reconnectTimeMillis) {
            this.append("retry:").append(String.valueOf(reconnectTimeMillis)).append("\n");
            return this;
        }

        public SSEEntryProcessor.SseEventBuilder comment(String comment) {
            this.append(":").append(comment).append("\n");
            return this;
        }

        public SSEEntryProcessor.SseEventBuilder data(Object object) {
            return this.data(object, (MediaType)null);
        }


        public SSEEntryProcessor.SseEventBuilder data(Object object, @Nullable MediaType mediaType) {
            this.append("data:");
            if (this.date==null){
                this.date=new StringBuilder();
            }
            this.date.append(object);
            this.append(this.date.toString());
            this.append("\n");
            return this;
        }
        SSEEntryProcessor.SseEventBuilder append(String text) {
            if (this.sb == null) {
                this.sb = new StringBuilder();
            }
            this.sb.append(text);
            return this;
        }
    }
}
