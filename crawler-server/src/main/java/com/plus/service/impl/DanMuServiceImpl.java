package com.plus.service.impl;

import com.plus.dao.DanMuVoMapper;
import com.plus.model.PO.DanMuPo;
import com.plus.service.IDanMuService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.sql.SQLException;
import java.util.List;

@Service
public class DanMuServiceImpl implements IDanMuService {

    @Resource
    private DanMuVoMapper danMuDao;


    @Override
    public int storeDanMu (DanMuPo danMuPo) throws SQLException {
        return danMuDao.insertDanMu(danMuPo);
    }

    @Override
    public List<DanMuPo> searchDanMu(String userName) {
        return danMuDao.selectDanMuByName(userName);
    }

    @Override
    public String getRandomName() {
        return danMuDao.selectUserNameByRandom();
    }
}
