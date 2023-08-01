package online.zzzzzzz.comment;

import javax.crypto.*;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

public class AES {


    static String key="wojf29Iek#&le@m";
    static  SecretKeySpec secretKeySpec;
    static Cipher cipher;
    static {
        try {
            //配置--加密与解密公用的
            KeyGenerator kgen =KeyGenerator.getInstance("AES");
            kgen.init(128, new SecureRandom(key.getBytes()));
            SecretKey secretKey = kgen.generateKey();
            byte[] enCodeFormat = secretKey.getEncoded();
             secretKeySpec = new SecretKeySpec(enCodeFormat, "AES");
             cipher = Cipher.getInstance("AES");// 创建密码器
             cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);// 初始化加密器

        }catch (Exception e){
            e.printStackTrace();
            throw new RuntimeException(e);
        }

    }



    /**
     * 加密
     * @param content 需要加密的内容
     * @return 加密之后的内容
     * @throws NoSuchPaddingException
     * @throws NoSuchAlgorithmException
     * @throws UnsupportedEncodingException
     * @throws InvalidKeyException
     * @throws IllegalBlockSizeException
     * @throws BadPaddingException
     */
    public static byte[] encipher(byte[] content) throws IllegalBlockSizeException, BadPaddingException, InvalidKeyException {
        cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);
        return cipher.doFinal(content);


    }

    /**
     * 解密
     * @param content
     * @return
     * @throws InvalidKeyException
     * @throws IllegalBlockSizeException
     * @throws BadPaddingException
     */
    public static byte[] decrypt(byte[] content) throws InvalidKeyException, IllegalBlockSizeException, BadPaddingException {

        cipher.init(Cipher.DECRYPT_MODE, secretKeySpec);// 初始化解密器

        return cipher.doFinal(content);

    }


    /**
     * 二进制转换成16进制，加密后的字节数组不能直接转换为字符串
     */
    static String parseByte2HexStr(byte buf[]) {
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < buf.length; i++) {
            String hex = Integer.toHexString(buf[i] & 0xFF);
            if (hex.length() == 1) {
                hex = '0' + hex;
            }
            sb.append(hex.toUpperCase());
        }
        return sb.toString();
    }

    /**
     * 16进制转换成二进制
     */
    static byte[] parseHexStr2Byte(String hexStr) {
        if (hexStr.length() < 1)
            return null;
        byte[] result = new byte[hexStr.length() / 2];
        for (int i = 0; i < hexStr.length() / 2; i++) {
            int high = Integer.parseInt(hexStr.substring(i * 2, i * 2 + 1), 16);
            int low = Integer.parseInt(hexStr.substring(i * 2 + 1, i * 2 + 2), 16);
            result[i] = (byte) (high * 16 + low);
        }
        return result;
    }

    public static void main(String[] args) throws IllegalBlockSizeException, BadPaddingException, InvalidKeyException {
        String s="一二三";
        byte[] encipher = encipher(s.getBytes());
        System.out.println(new String(encipher,StandardCharsets.UTF_8));

        byte[] decrypt = decrypt(encipher);
        System.out.println(new String(decrypt,StandardCharsets.UTF_8));
    }
}
