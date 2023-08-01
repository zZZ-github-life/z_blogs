package online.zzzzzzz;

import java.io.File;
import java.io.FileInputStream;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

/**
 * @author zZZ....
 * @description
 * @date 2022/1/17
 */

public class test {
   static String[] _0xef73 = { ""};

    public static void main(String[] args) throws Exception {

        File file = new File("D:\\a-project\\z_blogs\\src\\main\\webapp\\js\\music.js");
        FileInputStream fit = new FileInputStream(file);
        StringBuilder stringBuilder = new StringBuilder();
        byte[] bytes = new byte[194 * 1024];
        int read = fit.read(bytes);
        String s = new String(bytes, StandardCharsets.UTF_8);
        String s1 = ascii2native(s);

        for (int i = 0; i < _0xef73.length; i++) {
            String s3 = "_0xef73\\[" + i + "\\]";
            String s4 = "'" + _0xef73[i] + "'";
            s1 = s1.replaceAll(s3, s4);
        }
        System.out.println(s1);

    }

    private static String ascii2native ( String asciicode )
    {
        String[] asciis = asciicode.split ("\\\\u");
        String nativeValue = asciis[0];
        try
        {
            for ( int i = 1; i < asciis.length; i++ )
            {
                String code = asciis[i];
                nativeValue += (char) Integer.parseInt (code.substring (0, 4), 16);
                if (code.length () > 4)
                {
                    nativeValue += code.substring (4, code.length ());
                }
            }
        }
        catch (NumberFormatException e)
        {
            return asciicode;
        }
        return nativeValue;
    }

}
