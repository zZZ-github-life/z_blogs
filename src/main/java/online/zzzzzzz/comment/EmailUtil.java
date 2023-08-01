package online.zzzzzzz.comment;

import com.sun.mail.imap.IMAPStore;
import com.sun.mail.util.MailSSLSocketFactory;
import online.zzzzzzz.basics.listener.InitResource;
import org.apache.commons.lang3.StringUtils;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeUtility;
import javax.mail.search.FlagTerm;
import java.io.UnsupportedEncodingException;
import java.security.GeneralSecurityException;
import java.util.*;

/**
 * @author zZZ....
 * @description 用于发送和接受邮件
 * @date 2023/1/10
 */

public class EmailUtil {

    static String subject = "Hello，你在站点上的留言有了新回复";


    
    public static Session getSendSession() throws GeneralSecurityException {
        //创建一个配置文件并保存
        Properties properties = new Properties();
        
        properties.setProperty("mail.host", InitResource.config.get("email.host"));
        
        properties.setProperty("mail.transport.protocol", "smtp");
        
        properties.setProperty("mail.smtp.auth", "true");
        
        //QQ存在一个特性设置SSL加密
        MailSSLSocketFactory sf = new MailSSLSocketFactory();
        sf.setTrustAllHosts(true);
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.ssl.socketFactory", sf);
        
        //创建一个session对象
        return Session.getDefaultInstance(properties, new Authenticator() {
            
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                
                return new PasswordAuthentication(InitResource.config.get("email.username"), InitResource.config.get("email.password"));
            }
        });
    }
    
    public static Session getReceiveSession() throws GeneralSecurityException {
        //创建一个配置文件并保存
        Properties properties = new Properties();
    
        properties.setProperty("mail.host", "imap.qq.com");
    
        properties.setProperty("mail.transport.protocol", "imap");
    
        properties.setProperty("mail.smtp.auth", "true");
    
        //QQ存在一个特性设置SSL加密
        MailSSLSocketFactory sf = new MailSSLSocketFactory();
        sf.setTrustAllHosts(true);
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.ssl.socketFactory", sf);
    
        //创建一个session对象
        return Session.getDefaultInstance(properties, new Authenticator() {
        
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
            
                return new PasswordAuthentication(InitResource.config.get("email.username"), InitResource.config.get("email.password"));
            }
        });
    }
    
    
    /**
     * 发送邮件
     * @param content 发送邮件内容
     * @param receiveUser 发给谁
     */
    public static void sendEmail(String content,String receiveUser) {
        //获取连接对象
        Transport transport = null;
        try {
            Session session = getSendSession();
            //开启debug模式
            session.setDebug(true);
            
            //获取连接对象
            transport = session.getTransport();
            
            //连接服务器
            transport.connect(InitResource.config.get("email.host"),InitResource.config.get("email.username"), InitResource.config.get("email.password"));
            
            //创建邮件对象
            MimeMessage mimeMessage = new MimeMessage(session);
            
            //邮件发送人
            mimeMessage.setFrom(new InternetAddress(InitResource.config.get("email.username")));
            
            //邮件接收人
            mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(receiveUser));
            
            //邮件标题
            mimeMessage.setSubject(subject);
            
            //邮件内容
            mimeMessage.setContent(content, "text/html;charset=UTF-8");
            
            //发送邮件
            transport.sendMessage(mimeMessage, mimeMessage.getAllRecipients());
            
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            
            //关闭连接
            try {
                assert transport != null;
                transport.close();
            } catch (MessagingException e) {
                e.printStackTrace();
            }
        }
        
    }
    
    /**
     * 回复邮件
     * @param message 需要回复的邮件
     * @param content 邮件内容
     * @param subject 邮件主体
     * @throws MessagingException MessagingException
     * @throws GeneralSecurityException GeneralSecurityException
     */
    public static void replyMail(Message message,String content,String subject) throws MessagingException, GeneralSecurityException {
        Session session = getSendSession();
        InternetAddress internetAddress = (InternetAddress) message.getFrom()[0];
    
        MimeMessage replyMessage = (MimeMessage)message.reply(false);
        replyMessage.setFrom(InitResource.config.get("email.username"));
        replyMessage.setRecipients(MimeMessage.RecipientType.TO, internetAddress.getAddress());
        replyMessage.setContent(content,"text/html");
        if (StringUtils.isNotBlank(subject)){
            replyMessage.setSubject(subject);
        }
        Transport transport = session.getTransport("smtp");
        transport.connect(InitResource.config.get("email.host"),  InitResource.config.get("email.username"), InitResource.config.get("email.password"));
        Transport.send(replyMessage);
        transport.close();
    }
    
    /**
     * 处理未读邮件
     * @param dealEmail 提供处理未读邮件接口
     *
     */
    public static void receiveEmail(DealEmail dealEmail) {
        
        Folder folder = null;
        IMAPStore store = null;
        Message[] messages =null;
        try {
            Session receiveSession = getReceiveSession();
            store = (IMAPStore) receiveSession.getStore("imap");
            store.connect(InitResource.config.get("email.host"),  InitResource.config.get("email.username"), InitResource.config.get("email.password"));
            folder = store.getFolder("INBOX");// 获得用户的邮件帐户
            folder.open(Folder.READ_WRITE); // 设置对邮件帐户的访问权限
         //   int n = folder.getUnreadMessageCount();// 得到未读数量
            FlagTerm ft = new FlagTerm(new Flags(Flags.Flag.SEEN), false); // false代表未读，true代表已读
           // AndTerm andTerm = new AndTerm(ft, new SubjectTerm(subject)); //根据未读和标题搜索
            messages = folder.search(ft);
            dealEmail.deal(messages); //自己提供处理邮件的方法
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                assert folder != null;
                folder.close(false);// 关闭邮件夹对象
            } catch (MessagingException e) {
                e.printStackTrace();
            }
            try {
                store.close(); // 关闭连接对象
            } catch (MessagingException e) {
                e.printStackTrace();
            }
        }
    }
    
    public static String decodeText(String text) throws UnsupportedEncodingException {
        
        if (text == null)
            return null;
        if (text.startsWith("=?GB") || text.startsWith("=?gb"))
            text = MimeUtility.decodeText(text);
        else
            text = new String(text.getBytes("ISO8859_1"));
        return text;
    }
    
    
    @FunctionalInterface
    public interface DealEmail{
        void deal(Message[] messages);
    }
    
}


