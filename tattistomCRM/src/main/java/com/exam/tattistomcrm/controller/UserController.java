package com.exam.tattistomcrm.controller;


import com.exam.tattistomcrm.entity.User;
import com.exam.tattistomcrm.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserService userService = new UserService();


    @GetMapping("/profile")
    public User getUser(){
        return userService.getCurrentUser();
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        return userService.getUsers();
    }


}