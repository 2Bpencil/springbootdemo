package com.tyf.springbootdemo.applicationRunner;
/**
 * @Auther: tyf
 * @Date: 2018/12/6 17:00
 * @Description:
 */

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/**
 *
 * @description: 启动执行服务
 *
 * @author: Mr.Tan
 *
 * @create: 2018/12/6 17:00
 **/
@Component
@Order(value = 1)
public class StartService implements ApplicationRunner {

    private final static Logger logger = LoggerFactory.getLogger(StartService.class);


    @Override
    public void run(ApplicationArguments args) throws Exception {
        logger.info("------》》》》》启动任务已开启    1");
    }
}
