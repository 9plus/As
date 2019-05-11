package com.plus.thread;

import com.plus.common.DyUtil;

import java.io.IOException;
import java.net.Socket;

public class AliveThread implements Runnable {

    private Socket client;

    @Override
    public void run() {
        try {
            client = new Socket(DyUtil.HOST, DyUtil.PORT);
        } catch (IOException e) {
            e.printStackTrace();
        }
        String keepliveMsg = "type@=mrkl/";
        while (true) {
            DyUtil.sendRequest(client, keepliveMsg);
            try{
                Thread.sleep(30000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

        }
    }
}
