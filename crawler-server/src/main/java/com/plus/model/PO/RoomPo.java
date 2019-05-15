package com.plus.model.PO;

import java.io.Serializable;

public class RoomPo implements Serializable {

    private Integer roomid;

    private String streamer;

    public Integer getRoomid() {
        return roomid;
    }

    public void setRoomid(Integer roomid) {
        this.roomid = roomid;
    }

    public String getStreamer() {
        return streamer;
    }

    public void setStreamer(String streamer) {
        this.streamer = streamer;
    }
}
