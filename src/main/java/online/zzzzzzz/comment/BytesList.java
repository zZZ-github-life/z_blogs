package online.zzzzzzz.comment;

import java.util.Arrays;
import java.util.LinkedList;

/**
 * 维护可扩容的byte数组
 */
public class BytesList {
    //最大扩容次数
    private int maxCount = 10;
    //记录扩容次数
    private int count=0;

    transient byte[] elementData;

    private byte[] data;

    //记录数据的大小
    private int size;

    //修改次数
    private int modifyCount;

    private int defaultModifyCount;

    public BytesList() {
        this.elementData= new byte[]{};
    }


    public BytesList(byte[] bytes, boolean empty) {
        this.elementData= bytes;
        if (!empty){
            this.size=bytes.length;
        }
    }


    /**
     * 添加单个字节到容器
     * @param b 字节
     */
    public void add(byte b){
        if (this.elementData.length<=size){
            grow();
        }
        this.elementData[size++]=b;
        modifyCount++;
    }

    /**
     * 将字节数组追加到容器
     * @param bytes 数据
     */
    public void addAll(byte[] bytes){
        if ((size+bytes.length)>=elementData.length){
            grow();
        }
        int numNew = bytes.length;
        System.arraycopy(bytes, 0, elementData, size, numNew);
        size += numNew;
        modifyCount++;
    }


    /**
     * 向容器中追加有效长度的字节数组
     * @param bytes 需要添加的字节
     * @param len 字节数组结束位置
     */
    public void addAll(byte[] bytes,int len){
        if ((size+bytes.length)>=elementData.length){
            grow();
        }
        System.arraycopy(bytes, 0, elementData, size, len);
        size += len;
        modifyCount++;
    }

    /**
     * 获取容器中的数据
     * @return 有效数据
     */
    public byte[] getBytes(){
        if (defaultModifyCount!=modifyCount){
            data = new byte[size];
            System.arraycopy(elementData, 0, data, 0, size);
            defaultModifyCount=modifyCount;
        }
        return data;
    }


    public static byte[] getEmptyBytes(){
        return new byte[512];
    }
    /**
     * 得到一个指定长度的字节数组
     * @return 字节数组
     */
    public static byte[] getEmptyBytes(int len){
        return new byte[len];
    }
    public static void fill(byte[] a, byte val) {
        for (int i = 0, len = a.length; i < len; i++)
            a[i] = val;
    }

    public void reset(){
        this.size=0;
        this.modifyCount=0;
        this.defaultModifyCount=0;
        this.data=null;
    }

    public int size(){
        return this.size;
    }

    /**
     * 扩容
     */
    public void grow(){
        //容器最大扩容次数，限制客户端消息大小
        if (++count> maxCount){
            throw new RuntimeException("超过最大扩容次数限制，客户端的消息太大了");
        }
        elementData = Arrays.copyOf(elementData, elementData.length+1024);
    }

    public int indexOf(byte[] source){
        return indexOf(source,0,source.length,
                elementData,0,size,0);
    }

    //性能略低
    public static LinkedList<Integer>  indexOf(byte[] source, byte[] target){
        int index=0;
        LinkedList<Integer> arr = new LinkedList<>();
        while ((index=indexOf(source,0,source.length,target,0,target.length,index))!=-1){
            arr.add(index++);
        }
        return arr;
    }

    /**
     * 查找某个字节数组在另一个字节数组出现的位置
     * @param source 源字节数组
     * @param target 需要查找的子字节数组
     * @param fromIndex 从源字节数组哪个位置查找
     * @return 子字节数组在源字节数组出现的位置，没有则返回-1
     */
    public static int  indexOf(byte[] source, byte[] target,int fromIndex){
        return indexOf(source,0,source.length,target,0,target.length,fromIndex);
    }

    public static int indexOf(byte[] source ,byte b){
        for (int i = 0; i < source.length; i++) {
            if (source[i]==b){
                return i;
            }
        }
        return -1;
    }

    private static int indexOf(byte[] source, int sourceOffset, int sourceCount,
                              byte[] target, int targetOffset, int targetCount,
                       int fromIndex) {
        if (fromIndex >= sourceCount) {
            return (targetCount == 0 ? sourceCount : -1);
        }
        if (fromIndex < 0) {
            fromIndex = 0;
        }
        if (targetCount == 0) {
            return fromIndex;
        }

        byte first = target[targetOffset];
        int max = sourceOffset + (sourceCount - targetCount);

        for (int i = sourceOffset + fromIndex; i <= max; i++) {
            /* Look for first character. */
            if (source[i] != first) {
                while (++i <= max && source[i] != first);
            }

            /* Found first character, now look at the rest of v2 */
            if (i <= max) {
                int j = i + 1;
                int end = j + targetCount - 1;
                for (int k = targetOffset + 1; j < end && source[j]
                        == target[k]; j++, k++);

                if (j == end) {
                    /* Found whole string. */
                    return i - sourceOffset;
                }
            }
        }
        return -1;
    }


}
