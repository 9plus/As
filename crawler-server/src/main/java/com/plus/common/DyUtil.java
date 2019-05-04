package com.plus.common;

public class DyUtil {

    private DyUtil() throws DyException{
        throw new DyException("Construct error");
    }

    public static final String HOST = "openbarrage.douyutv.com";
    public static final int PORT = 8601;
    // 消息头长度 = 消息长度(4) + 消息类型,加密,保留字段(4) + 内容长度(?) + 结尾标识符(1)
    public static final int DATA_HEAD_LEN = 4 + 4 + 1;
    public static final int CODE = 689;

    /**
     * 以小端模式将int转成byte[]
     * @param data int形式的数据
     * @return 字节形式的数据
     */
    public static byte[] intToBytes(int data) {
        byte[] src = new byte[4];
        src[3] = (byte) ((data >> 24) & 0xFF);
        src[2] = (byte) ((data >> 16) & 0xFF);
        src[1] = (byte) ((data >> 8) & 0xFF);
        src[0] = (byte) (data & 0xFF);
        return src;
    }

    /**
     * 以小端模式将byte[]转成int
     * @param src 字节形式的数组
     * @return int形式的数据
     */
    public static int bytesToInt(byte[] src) {
        return ((src[0] & 0xFF)
                | ((src[1] & 0xFF) << 8)
                | ((src[2] & 0xFF) << 16)
                | ((src[3] & 0xFF) << 24));
    }
}
