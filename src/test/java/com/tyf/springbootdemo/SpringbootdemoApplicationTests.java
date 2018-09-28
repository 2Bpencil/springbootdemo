package com.tyf.springbootdemo;

import com.tyf.springbootdemo.code.dao.RoleRepository;
import com.tyf.springbootdemo.code.dao.UserRepository;
import com.tyf.springbootdemo.code.entity.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringbootdemoApplicationTests {

    private final static Logger logger = LoggerFactory.getLogger(SpringbootdemoApplicationTests.class);

    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private UserRepository userRepository;

    @Test
    public void contextLoads() {

        logger.info("一共有"+userRepository.count()+"个用户");

        User user = new User();
        user.setUsername("admin");
        user.setPassword("789456");
        System.out.println(user.getPassword());

    }

}
