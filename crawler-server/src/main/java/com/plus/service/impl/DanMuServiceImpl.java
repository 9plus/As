package com.plus.service.impl;

import com.plus.dao.DanMuVoMapper;
import com.plus.model.PO.DanMuPo;
import com.plus.service.IDanMuService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class DanMuServiceImpl implements IDanMuService {

    @Resource
    private DanMuVoMapper danMuDao;


    @Override
    public void storeDanMu(DanMuPo danMuPo) {
        System.out.println("主键是: " + danMuDao.insertDanMu(danMuPo));
    }
}
