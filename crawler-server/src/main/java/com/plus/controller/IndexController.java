package com.plus.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * here we can't use @RestController. Because RestController will
 * return string instead view as to 'forward:/index.html'
 */
@Controller
@RequestMapping("/")
public class IndexController {

    @GetMapping
    public String home() {
        return "forward:/index.html";
    }
}
