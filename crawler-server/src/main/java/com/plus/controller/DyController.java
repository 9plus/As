package com.plus.controller;

import com.plus.common.DyUtil;
import org.apache.commons.lang3.ArrayUtils;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
@Order(1)
public class DyController implements ApplicationRunner {
    private Socket client;

    @Override
    public void run(ApplicationArguments args) throws IOException{
        client = new Socket("119.96.201.28", DyUtil.PORT);
        Thread t1 = new Thread(this::getDanMu);
        Thread t2 = new Thread(this::keeplive);
        t1.start();
        t2.start();

        while (Thread.activeCount() > 1) {
            Thread.yield();
        }
        //client.close();
    }

    private void getDanMu(){
        String loginMsg = "type@=loginreq/roomid@=9999/";
        sendRequest(loginMsg);

        byte[] bytes = receiveMsg();
        String msg = new String(Arrays.copyOfRange(bytes, 0, bytes.length));
        System.out.println(msg);

        String joinGroupMsg =  "type@=joingroup/rid@=9999/gid@=-9999/";
        sendRequest(joinGroupMsg);

        while (true) {
            byte[] msgBytes = receiveMsg();
            String s = new String(Arrays.copyOfRange(msgBytes, 0, msgBytes.length));
            Pattern p1 = Pattern.compile("txt@=(.+?)/cid@");
            Matcher matcher = p1.matcher(s);
            while (matcher.find()){
                System.out.println(matcher.group(0));
            }
            try {
                Thread.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    private void keeplive() {
        String keepliveMsg = "type@=mrkl/";
        while (true) {
            sendRequest(keepliveMsg);
            try{
                Thread.sleep(30000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

        }

    }

    private void sendRequest(String msg){
        try {
            int msgLength = 4 + 4 +msg.length() + 1;
            byte[] dataLength = DyUtil.intToBytes(msgLength);
    //        byte[] dataHead = ArrayUtils.addAll(dataLength, DyUtil.intToBytes(DyUtil.CODE));
            byte[] dataHead = DyUtil.intToBytes(DyUtil.CODE);
            byte[] data = msg.getBytes(StandardCharsets.ISO_8859_1);

            ByteArrayOutputStream byteArray = new ByteArrayOutputStream();

            byteArray.write(dataLength);
            byteArray.write(dataLength);
            byteArray.write(dataHead);
            byteArray.write(data);
            byteArray.write(0);

            OutputStream out = client.getOutputStream();
            out.write(byteArray.toByteArray());
            out.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private byte[] receiveMsg() {
        ByteArrayOutputStream byteArray = new ByteArrayOutputStream();
        try{
            InputStream inputStream = client.getInputStream();

            int dataLength = getResponseLength(inputStream);
            int contentLen2 = getResponseLength(inputStream);
            int msgType = getResponseLength(inputStream);

            int len = 0;
            int readLen = 0;
            dataLength = dataLength - 8;
            byte[] bytes = new byte[dataLength];
            while ((len = inputStream.read(bytes, 0 , dataLength - readLen)) != -1) {
                byteArray.write(bytes, 0 ,len);
                readLen += len;
                if (readLen == dataLength) {
                    break;
                }
            }

        } catch (IOException e){
            e.printStackTrace();
        }
        return byteArray.toByteArray();
    }

    private int getMsgLength(String msg){
        return DyUtil.DATA_HEAD_LEN + (msg == null? 0 : msg.length());
    }

    private int getResponseLength(InputStream inputStream) throws IOException {
        byte[] bytes = new byte[4];
        inputStream.read(bytes, 0 , 4);
        return DyUtil.bytesToInt(bytes);

    }
}
