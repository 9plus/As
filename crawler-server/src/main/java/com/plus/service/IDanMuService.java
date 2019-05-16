package com.plus.service;

import com.plus.model.PO.DanMuPo;

import java.util.List;

public interface IDanMuService {

    int storeDanMu(DanMuPo danMuPo);

    List<DanMuPo> searchDanMu(String userName);
}
