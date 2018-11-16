package com.tyf.springbootdemo.code.controller;

import com.tyf.springbootdemo.base.page.Page;
import com.tyf.springbootdemo.base.page.SearchFilter;
import com.tyf.springbootdemo.base.page.SearchUtils;
import com.tyf.springbootdemo.code.entity.User;
import com.tyf.springbootdemo.code.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServiceImpl userService;
    @RequestMapping(value = "userManage",method = RequestMethod.GET)
    public String userManage(){
        return "system/user";
    }

    @RequestMapping(value = "getPages",method = RequestMethod.GET)
    public void getPageJson(Page<User> pages, HttpServletRequest request, HttpServletResponse response){
        List<SearchFilter> filterlist = SearchUtils.getParametersStartingWith(request, "search");
        String json = userService.getPageJson(pages,filterlist);
        try {
            response.getWriter().print(json);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
