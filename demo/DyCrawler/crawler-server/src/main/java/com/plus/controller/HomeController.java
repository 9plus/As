package com.plus.controller;

import com.plus.model.PO.DanMuPo;
import com.plus.service.IDanMuService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class HomeController {

    @Resource
    private IDanMuService danMuService;

    @GetMapping(value = "search")
    public List<DanMuPo> search(String userName) {
        if (userName == null) {
            // todo log
        }
        return danMuService.searchDanMu(userName);
    }

    @GetMapping(value = "random")
    public String getRandomUserName() {
        return danMuService.getRandomName();
    }

}
