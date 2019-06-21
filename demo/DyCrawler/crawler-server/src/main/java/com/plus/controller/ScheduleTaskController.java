package com.plus.controller;

import com.plus.service.IDanMuService;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;
import org.springframework.scheduling.support.CronTrigger;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Component
@Configuration
@EnableScheduling
public class ScheduleTaskController implements SchedulingConfigurer {

    @Resource
    private IDanMuService danMuService;

    /**
     * crop pattern is : second, minute, hour, day, month, weekday
     * <ul>
     * <li>"0 0 * * * *" = the top of every hour of every day.</li>
     * <li>"*\/10 * * * * *" = every ten seconds.</li>
     * <li>"0 0 8-10 * * *" = 8, 9 and 10 o'clock of every day.</li>
     * <li>"0 0/30 8-10 * * *" = 8:00, 8:30, 9:00, 9:30 and 10 o'clock every day.</li>
     * <li>"0 0 9-17 * * MON-FRI" = on the hour nine-to-five weekdays</li>
     * <li>"0 0 0 25 12 ?" = every Christmas Day at midnight</li>
     *
     * 每天清除一次ip
     * @param scheduledTaskRegistrar
     */
    @Override
    public void configureTasks(ScheduledTaskRegistrar scheduledTaskRegistrar) {
        scheduledTaskRegistrar.addTriggerTask(() -> danMuService.clearIp(),
                triggerContext -> new CronTrigger("* * * */1 * *").nextExecutionTime(triggerContext));
    }
}
