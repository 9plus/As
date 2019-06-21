package com.plus.dao;

import com.plus.model.PO.DanMuPo;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface DanMuVoMapper {

    Integer insertDanMu(DanMuPo danMuPo);

    List<DanMuPo> selectDanMuByName(String userName);

    String selectUserNameByRandom();

    void insertIp(String ip);

    Integer selectAccessCountsByIp(String ip);

    void updateAccessCountsByIp(String ip);

    void deleteIp();
}
