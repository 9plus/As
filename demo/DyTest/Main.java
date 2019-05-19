package DyTest;

public class Main {
    public static void main(String[] args) {
        Thread t1 = new Thread(new CrawlerThread(74960));
        Thread t2 = new Thread(new CrawlerThread(60937));
        Thread t3 = new Thread(new AliveThread());
        t1.start();
        t2.start();
        t3.start();

        while (Thread.activeCount() > 1) {
            Thread.yield();
        }
    }
}
