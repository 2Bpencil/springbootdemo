package com.tyf.springbootdemo.quartz;

import org.quartz.Job;
import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @Auther: tyf
 * @Date: 2018/11/26 16:28
 * @Description:
 */
public class TestJob implements Job {
    private final static Logger logger = LoggerFactory.getLogger(TestJob.class);

    public final static String JOB_GROUP = "test";

    public final static String TRIGGER_GROUP = "testTrigger";

    @Override
    public void execute(JobExecutionContext context) throws JobExecutionException {
        JobDataMap dataMap = context.getJobDetail().getJobDataMap();
        Thread th=Thread.currentThread();

        logger.info(dataMap.getString("name")+"-----我的线程id:"+th.getId());
    }
}
