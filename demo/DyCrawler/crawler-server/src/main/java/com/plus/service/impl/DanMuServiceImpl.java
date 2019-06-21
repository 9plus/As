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

    private static final int MAX_REQUEST_TIMES = 100;

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

    @Override
    public void incAccessCount(String ip) {
        Integer accessCounts = danMuDao.selectAccessCountsByIp(ip);
        if (accessCounts != null) {
            danMuDao.updateAccessCountsByIp(ip);
        } else {
            danMuDao.insertIp(ip);
        }
    }

    @Override
    public Boolean isRequestValid(String ip) {
        Integer accessCounts = danMuDao.selectAccessCountsByIp(ip);
        return accessCounts == null || accessCounts < MAX_REQUEST_TIMES;
    }

    @Override
    public void clearIp() {
        danMuDao.deleteIp();
    }
}
