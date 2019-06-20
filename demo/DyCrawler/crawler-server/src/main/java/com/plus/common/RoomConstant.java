package com.plus.common;

import java.util.HashMap;
import java.util.Map;

public class RoomConstant {
    private RoomConstant() {}

    private static final String YYF = "yyfyyf";
    private static final String ZARD = "zard1991";
    private static final String CHEN = "叫我老陈就好了";
    private static final String NAI = "谢彬DD";
    private static final String MAYBE = "LGDMaybeee";
    private static final String ZHOU = "Zhou陈尧";
    private static final String ZSMJ = "龚建ZSMJ";
    private static final String LILITH = "莉莉丝的莉莉丝";

    public static Map<Integer, String> roomMap = new HashMap<Integer, String>(){
        {
            put(9999, YYF);
            put(60937, ZARD);
            put(74960, CHEN);
            put(110, NAI);
            put(73966, MAYBE);
            put(88660, ZHOU);
            put(52876, ZSMJ);
            put(1972046, LILITH);
        }
    };

    public static final int ROOM_NUMS = 8;

}
