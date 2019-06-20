package com.plus.controller;

import com.plus.common.DyUtil;
import com.plus.model.PO.DanMuPo;
import com.plus.service.IDanMuService;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
public class HomeController {

    @Resource
    private IDanMuService danMuService;

    @GetMapping(value = "search")
    public List<DanMuPo> search(@Param("userName") String userName, HttpServletRequest request) {
        String ip = request.getRemoteAddr();
        if (danMuService.isRequestValid(ip)) {
            danMuService.incAccessCount(ip);
            if (userName != null && DyUtil.isUserNameValid(userName)) {
                return danMuService.searchDanMu(userName);
            }
        }
        return new ArrayList<>();
    }

    @GetMapping(value = "random")
    public String getRandomUserName(HttpServletRequest request) {
        String ip =request.getRemoteAddr();
        if (danMuService.isRequestValid(ip)) {
            danMuService.incAccessCount(ip);
            return danMuService.getRandomName();
        }
        return DyUtil.ERROR;
    }

}
