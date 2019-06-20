package com.plus.controller;

import com.plus.common.RoomConstant;
import com.plus.service.IDanMuService;
import com.plus.service.impl.DanMuServiceImpl;
import com.plus.thread.AliveThread;
import com.plus.thread.CrawlerThread;
import com.plus.thread.ThreadPool;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;


@Component
@Order(1)
public class DyController implements ApplicationRunner {

    @Resource
    public IDanMuService danMuService;

    public static IDanMuService sDanMuService;

    @PostConstruct
    public void init() {
        sDanMuService = this.danMuService;
    }

    /**
     * 创建线程池监听8个房间的弹幕
     * @param args
     */
    @Override
    public void run(ApplicationArguments args) {
        ThreadPool pool = new ThreadPool(RoomConstant.ROOM_NUMS);
        for (Integer room : RoomConstant.roomMap.keySet()) {
            pool.execute(new CrawlerThread(room));
        }
    }
}
