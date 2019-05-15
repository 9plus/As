package com.plus.dao;

import com.plus.model.PO.DanMuPo;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface DanMuVoMapper {

    int insertDanMu(DanMuPo danMuPo);

    List<DanMuPo> selectDanMuByName(String userName);
}
