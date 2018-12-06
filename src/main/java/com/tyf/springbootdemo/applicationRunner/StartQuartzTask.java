package com.tyf.springbootdemo.applicationRunner;

import com.tyf.springbootdemo.quartz.QuartzManager;
import com.tyf.springbootdemo.quartz.TestJob;
import org.quartz.JobDataMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/**
 * @Auther: tyf
 * @Date: 2018/12/6 17:22
 * @Description:  项目启动时 加载定时任务
 */
@Component
@Order(value = 2)
public class StartQuartzTask implements ApplicationRunner {

    private final static Logger logger = LoggerFactory.getLogger(StartQuartzTask.class);

    @Override
    public void run(ApplicationArguments args) throws Exception {
        for (int i = 0; i < 3; i++) {
            JobDataMap dataMap = new JobDataMap();
            dataMap.put("name","我是定时任务"+i+"！");
            QuartzManager.addJob(i+"",TestJob.JOB_GROUP,TestJob.TRIGGER_GROUP,"*/5 * * * * ?",TestJob.class,dataMap);
        }

        logger.info("-------------加载定时任务------------->>>完毕！");
    }
}
