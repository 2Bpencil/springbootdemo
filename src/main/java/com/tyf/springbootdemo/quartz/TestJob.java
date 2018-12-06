package com.tyf.springbootdemo.quartz;

import org.quartz.Job;
import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

/**
 * @Auther: tyf
 * @Date: 2018/11/26 16:28
 * @Description:
 */
public class TestJob implements Job {

    public final static String JOB_GROUP = "test";

    public final static String TRIGGER_GROUP = "testTrigger";

    @Override
    public void execute(JobExecutionContext context) throws JobExecutionException {
        JobDataMap dataMap = context.getJobDetail().getJobDataMap();
        System.out.println("  定时任务!  "+System.currentTimeMillis());
    }
}
