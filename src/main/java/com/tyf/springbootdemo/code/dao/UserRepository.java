package com.tyf.springbootdemo.code.dao;

import com.tyf.springbootdemo.base.repository.ExpandJpaRepository;
import com.tyf.springbootdemo.code.entity.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends ExpandJpaRepository<User,Integer> {

    User findByUsername(String name);

}
