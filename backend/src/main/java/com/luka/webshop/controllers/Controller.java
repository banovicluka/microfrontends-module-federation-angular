package com.luka.webshop.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping("/alo")
    public String helloworld(){
        return "alooo";
    }
}
