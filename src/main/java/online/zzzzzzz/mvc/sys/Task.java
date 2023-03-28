package online.zzzzzzz.mvc.sys;

import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import online.zzzzzzz.basics.listener.InitResource;
import online.zzzzzzz.comment.Constant;
import online.zzzzzzz.comment.EmailUtil;
import online.zzzzzzz.mvc.blogs.service.BlogBlogsService;
import online.zzzzzzz.mvc.sys.dao.SysMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMultipart;
import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import java.security.GeneralSecurityException;
import java.util.HashMap;

/**
 * @author zZZ....
 * @description 定时任务
 * @date 2023/1/10
 */
@Component
public class Task {
    
    @Autowired
    private BlogBlogsService blogBlogsService;
    
    @Autowired
    private FreeMarkerConfigurer freeMarkerConfigurer;
    
    @Autowired
    private SysMapper sysMapper;
    
    /**
     * 每隔5秒执行一次
     * 收发邮件，订阅，退订 邮件
     */
    @Scheduled(cron = "*/5 * * * * ?")
    public void unsubscribeEmail(){
    
       EmailUtil.receiveEmail(messages1 -> {
            if (messages1 ==null || messages1.length==0){
                return;
            }
            for (Message message : messages1) {
                try {
                    Object content = message.getContent();
                    if(content instanceof String  ) {
                        if ("TD".equalsIgnoreCase(content.toString().trim()) ){//退订的加入到邮箱
                            readEmail(message,"email/unsubscribe.ftl","退订通知");
                        }else if ("XD".equalsIgnoreCase(content.toString().trim())){  //续订
                            readEmail(message,"email/renew.ftl","续订通知");
                        }
                    }else if(content instanceof MimeMultipart){
                        MimeMultipart mimeMultipart = (MimeMultipart) content;
                        for (int i = 0; i < mimeMultipart.getCount(); i++) {
                            BodyPart bodyPart = mimeMultipart.getBodyPart(i);
                            if (bodyPart.isMimeType("text/plain")) {
                                String result =bodyPart.getContent().toString();
                                if ("TD".equalsIgnoreCase(result.trim().substring(0,2)) ){//退订的加入到邮箱
                                    readEmail(message,"email/unsubscribe.ftl","退订通知");
                                }else if ("XD".equalsIgnoreCase(result.trim().substring(0,2))){  //续订
                                    readEmail(message,"email/renew.ftl","续订通知");
                                }
                            }
//                            else if (bodyPart.isMimeType("text/html")) {
//                                String html = (String) bodyPart.getContent();
//                                result = result + "\n" + org.jsoup.Jsoup.parse(html).text();
//                            }
                        }
                    }
                }catch (Exception e){
                    e.printStackTrace();
                }
    
            }
        });
    }
    
    /**
     * 每晚12点执行
     * 生成页面，保存访问统计， 垃圾收集
     */
    @Scheduled(cron = "0 0 12 * * ?")
    public void initResource(){
    
        sysMapper.insertOrUpdate("PV", InitResource.PV.toString());
        sysMapper.insertOrUpdate("TV", InitResource.TV.toString());
        sysMapper.insertOrUpdate("UV", InitResource.UV.toString());
        sysMapper.insertOrUpdate("WC", InitResource.WC.toString());
    
        blogBlogsService.initHtml();
    
        System.gc();
        
    }
    
    
    private void readEmail(Message message,String temPath,String subject) throws MessagingException, IOException, TemplateException, GeneralSecurityException {
    
        InternetAddress internetAddress = (InternetAddress)message.getFrom()[0];
        String address = internetAddress.getAddress();
        blogBlogsService.unsubscribe(address);
        Configuration configuration = freeMarkerConfigurer.getConfiguration();
        Template template = configuration.getTemplate(temPath);
        HashMap<String, Object> var = new HashMap<>();
        var.put("href", Constant.DOMAIN);
        var.put("websiteName", Constant.WEBSITENAME);
        Writer out = new StringWriter(3000);
        template.process(var, out);
        String tem = out.toString();
        EmailUtil.replyMail(message,tem,subject);
        
    }
}
