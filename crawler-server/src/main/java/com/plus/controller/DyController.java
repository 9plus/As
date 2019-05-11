package com.plus.controller;

import com.plus.thread.AliveThread;
import com.plus.thread.CrawlerThread;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
@Order(1)
public class DyController implements ApplicationRunner {


    @Override
    public void run(ApplicationArguments args) throws IOException{
        CrawlerThread crawlerThread = new CrawlerThread(9999);
        AliveThread aliveThread = new AliveThread();
        Thread t1 = new Thread(crawlerThread);
        Thread t2 = new Thread(aliveThread);
        t1.start();
        t2.start();

        while (Thread.activeCount() > 1) {
            Thread.yield();
        }
        //client.close();
    }
}
