package com.tyf.springbootdemo;

import com.tyf.springbootdemo.base.page.Page;
import com.tyf.springbootdemo.base.page.SearchFilter;
import com.tyf.springbootdemo.base.page.SearchUtils;
import com.tyf.springbootdemo.code.dao.RoleRepository;
import com.tyf.springbootdemo.code.dao.TestRepository;
import com.tyf.springbootdemo.code.dao.UserRepository;
import com.tyf.springbootdemo.code.entity.User;
import com.tyf.springbootdemo.code.service.impl.UserServiceImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
import java.util.stream.Stream;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringbootdemoApplicationTests {

    private final static Logger logger = LoggerFactory.getLogger(SpringbootdemoApplicationTests.class);

    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserServiceImpl userService;

    @Test
    public void contextLoads() {

        String nickName = userRepository.findByUsername("tyf").getNickname();

        System.out.println(nickName);
    }

}
