package com.plus.thread;

import com.plus.common.DyUtil;

import java.io.IOException;
import java.net.Socket;
import java.util.Date;
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

        connectToDy();
        while (true) {
            String s = DyUtil.receiveMsg(client);
            if (s.equals("-1")) {
                connectToDy();
                continue;
            }
            Pattern p1 = Pattern.compile("txt@=(.+?)/cid@");
            Matcher matcher = p1.matcher(s);
            String danMu = "";
            String userName = "";
            String card = "";
            String time = "";
            while (matcher.find()) {
                danMu = matcher.group(0);
            }
            if (!danMu.equals("")) {
                System.out.println(DyUtil.df.format(new Date()) + " " + danMu);
            }
//                Pattern p2 = Pattern.compile("/nn@=(.+?)/");
//                Matcher matcher2 = p2.matcher(s);
//
//                while (matcher2.find()) {
//                    userName = matcher2.group(0);
//                }
//
//                p2 = Pattern.compile("bnn@=(.+?)/bl");
//                matcher2 = p2.matcher(s);
//
//                while (matcher2.find()) {
//                    card = matcher2.group(0);
//                }
//                if (!danMu.equals("")) {
//                    System.out.println(df.format(new Date()) + " " + card + " " + "[" + userName + "]" + ": " + danMu);
//                }

//            String userName = DyUtil.getMsg(s, "/nn@=(.+?)/", 5, 1);
//            String danMu = DyUtil.getMsg(s, "txt@=(.+?)/cid@", 5, 5);
//            String card = DyUtil.getMsg(s, "bnn@=(.+?)/", 5, 1);

            try {
                Thread.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

    }

    private void connectToDy() {
        try {
            if (client != null) {
                client.close();
            }
            client = new Socket(DyUtil.HOST, DyUtil.PORT);
        } catch (IOException e) {
            e.printStackTrace();
        }

        String loginMsg = "type@=loginreq/roomid@="+ String.valueOf(roomId) + "/";
        DyUtil.sendRequest(client, loginMsg);

        String msg = DyUtil.receiveMsg(client);

        String joinGroupMsg =  "type@=joingroup/rid@=" + String.valueOf(roomId) +"/gid@=-9999/";
        DyUtil.sendRequest(client, joinGroupMsg);
    }

    private void logout() {
        String logoutMsg = "type@=logout/";
        DyUtil.sendRequest(client, logoutMsg);
    }
}
