package com.tyf.springbootdemo.code.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/table")
public class TableController {

    @RequestMapping(value = "toTable",method = RequestMethod.GET)
    public String toTable(){
        return "tableDemo";
    }




}
