package com.tyf.springbootdemo.utils;

import org.springframework.security.core.context.SecurityContextHolder;

/**
 * @Auther: tyf
 * @Date: 2019/7/8 17:25
 * @Description:
 */
public class SecurityUtil {


    public static void getUser(){
        SecurityContextHolder.getContext().getAuthentication().getName();
    }



}
