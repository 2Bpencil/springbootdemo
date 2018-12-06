package com.tyf.springbootdemo.listener;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

/**
 * @Auther: tyf
 * @Date: 2018/11/26 15:19
 * @Description:  监听器s
 */
@WebListener
public class TestListener implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        System.out.println("--------------->>servletContext上下文初始化");
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {
        System.out.println("--------------->>servletContext上下文销毁");
    }
}
