package com.plus.thread;

import com.plus.common.DyUtil;

import java.io.IOException;
import java.net.Socket;
import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CrawlerThread implements Runnable {

    private Socket client;
    private int roomId;

    public CrawlerThread(int roomId) {
        this.roomId = roomId;
    }
    @Override
    public void run(){
        try {
            client = new Socket(DyUtil.HOST, DyUtil.PORT);
        } catch (IOException e) {
            e.printStackTrace();
        }
        String loginMsg = "type@=loginreq/roomid@="+ String.valueOf(roomId) + "/";
        DyUtil.sendRequest(client, loginMsg);

        byte[] bytes = DyUtil.receiveMsg(client);
        String msg = new String(Arrays.copyOfRange(bytes, 0, bytes.length));
        System.out.println(msg);

        String joinGroupMsg =  "type@=joingroup/rid@=" + String.valueOf(roomId) +"/gid@=-9999/";
        DyUtil.sendRequest(client, joinGroupMsg);

        while (true) {
            byte[] msgBytes = DyUtil.receiveMsg(client);
            String s = new String(Arrays.copyOfRange(msgBytes, 0, msgBytes.length));
            Pattern p1 = Pattern.compile("txt@=(.+?)/cid@");
            Matcher matcher = p1.matcher(s);
            while (matcher.find()) {
                System.out.println(matcher.group(0));
            }
            try {
                Thread.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
