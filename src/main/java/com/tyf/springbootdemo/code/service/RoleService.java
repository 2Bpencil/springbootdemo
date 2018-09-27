package com.tyf.springbootdemo.code.service;

import com.tyf.springbootdemo.code.entity.Role;

import java.util.List;

public interface RoleService {

    List<Role> findAll();

    List<Role> findByMenuId(Integer id);

}
