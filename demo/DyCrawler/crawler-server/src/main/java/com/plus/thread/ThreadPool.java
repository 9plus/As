package com.plus.thread;

import java.util.concurrent.*;

public class ThreadPool {
    private ExecutorService executorService;

    public ThreadPool(int maxPoolSize) {
//        executorService = new ThreadPoolExecutor(Runtime.getRuntime().availableProcessors(),
//                maxPoolSize, 120L, TimeUnit.SECONDS, new ArrayBlockingQueue<>(queueSize));
        executorService = Executors.newFixedThreadPool(maxPoolSize);
    }

    public void execute(Runnable task) {
        executorService.execute(task);
    }
}
