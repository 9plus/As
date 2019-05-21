import {DanMu} from './home.util';

export class DyUser {

  name: string;
  rooms: Map<number, string>;
  danMus: Map<number, DanMu[]>;

  constructor() {
    this.name = '';
    this.rooms = new Map<number, string>();
    this.danMus = new Map<number, DanMu[]>();
  }

  clear() {
    this.name = '';
    this.danMus.clear();
  }

  initRooms() {
    this.rooms.set(74960, '叫我老陈就好了');
    this.rooms.set(60937, 'zard1991');
    this.rooms.set(9999, 'yyfyyf');
    this.rooms.set(110, '谢彬DD');
  }
}
