package com.tyf.springbootdemo.quartz;

import org.quartz.*;
import org.quartz.impl.StdSchedulerFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @Auther: tyf
 * @Date: 2018/11/26 15:59
 * @Description:
 */
public class QuartzManager {

    private final static Logger logger = LoggerFactory.getLogger(QuartzManager.class);

    private static SchedulerFactory schedulerFactory = new StdSchedulerFactory();

    /** 
    * @Description: 新增定时任务
    * @Param: [jobId 任务id 和 触发器id, jobGroup 任务组名, triggerGroup 触发器组, cron 时间表达式, clazz 任务类, dataMap 数据]
    * @return: void 
    * @Author: Mr.Tan 
    * @Date: 2018/11/28 
    */ 
    public static void addJob(String jobId,String jobGroup,String triggerGroup,String cron,Class clazz,JobDataMap dataMap) {
        try {
            Scheduler sched = schedulerFactory.getScheduler();
            // 任务名，任务组，任务执行类
            JobDetail jobDetail = JobBuilder.newJob(clazz).withIdentity(jobId,jobGroup)
                    .usingJobData(dataMap) // 定义属性
                    .build();
            // 触发器
            TriggerBuilder<Trigger> triggerBuilder = TriggerBuilder.newTrigger();
            // 触发器名,触发器组
            triggerBuilder.withIdentity(jobId, triggerGroup).startNow().startNow()
                    .withSchedule(CronScheduleBuilder.cronSchedule(cron));
            // 创建Trigger对象
            CronTrigger trigger = (CronTrigger) triggerBuilder.build();

            sched.scheduleJob(jobDetail, trigger);
            logger.info("--新增定时任务--》》"+jobId);
            // 启动
            if (!sched.isShutdown()) {
                sched.start();
            }
        } catch (SchedulerException e) {
            e.printStackTrace();
        }
    }
    /** 
    * @Description: 移除定时任务
    * @Param: [jobId, jobGroup, triggerGroup] 
    * @return: void 
    * @Author: Mr.Tan 
    * @Date: 2018/11/28 9:39
    */ 
    public static void removeJob(String jobId,String jobGroup,String triggerGroup){
        try {
            Scheduler sched = schedulerFactory.getScheduler();
            TriggerKey triggerKey = TriggerKey.triggerKey(jobId, triggerGroup);
            sched.pauseTrigger(triggerKey);// 停止触发器
            sched.unscheduleJob(triggerKey);// 移除触发器
            sched.deleteJob(JobKey.jobKey(jobId, jobGroup));// 删除任务
            logger.info("--移除定时任务--》》"+jobId);
        } catch (SchedulerException e) {
            e.printStackTrace();
        }
    }
    /** 
    * @Description: 关闭所有定时任务
    * @Param: [] 
    * @return: void 
    * @Author: Mr.Tan 
    * @Date: 2018/11/28 9:41
    */ 
    public static void shutdownJobs() {
        try {
            Scheduler sched = schedulerFactory.getScheduler();
            if (!sched.isShutdown()) {
                sched.shutdown();
                logger.info("--关闭所有定时任务--");
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }



}
