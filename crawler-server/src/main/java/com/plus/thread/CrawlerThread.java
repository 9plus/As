package com.plus.thread;

import com.plus.common.DyUtil;
import com.plus.controller.DyController;
import com.plus.model.PO.DanMuPo;
import com.plus.service.IDanMuService;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import java.io.IOException;
import java.net.Socket;
import java.util.Date;
import java.util.Map;

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

            Map<String, String> m = DyUtil.getMsg(s);
            String danMu = m.get("txt");
            if (danMu != null && !danMu.equals("")) {
                String name = m.get("nn");
                String cardName = m.get("bnn");
                String cardLevel = m.get("bl");
                String roomId = m.get("rid");
                String level = m.get("level");
                String time = DyUtil.DF.format(new Date());
                System.out.println(time + " " + cardLevel + "级"  + cardName + " [" + name + "] : " + danMu);
                DanMuPo danMuPo = new DanMuPo();
                danMuPo.setTime(DyUtil.DF.format(new Date()));
                danMuPo.setCardLevel(Integer.valueOf(cardLevel));
                danMuPo.setCardName(cardName == null ? "": cardName);
                danMuPo.setLevel(Integer.valueOf(level));
                danMuPo.setRoomid(Integer.valueOf(roomId));
                danMuPo.setUserName(name);
                danMuPo.setText(danMu);
                DyController.sDanMuService.storeDanMu(danMuPo);
            }

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

        String joinGroupMsg =  "type@=joingroup/rid@=" + String.valueOf(roomId) +"/gid@=-9999/";
        DyUtil.sendRequest(client, joinGroupMsg);
    }

    private void logout() {
        String logoutMsg = "type@=logout/";
        DyUtil.sendRequest(client, logoutMsg);
    }
}
