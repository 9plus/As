package com.plus.service;

import com.plus.model.PO.DanMuPo;

import java.sql.SQLException;
import java.util.List;

public interface IDanMuService {

    int storeDanMu (DanMuPo danMuPo) throws SQLException;

    List<DanMuPo> searchDanMu(String userName);

    String getRandomName();

    void incAccessCount(String ip);

    Boolean isRequestValid(String ip);

    void clearIp();
}
