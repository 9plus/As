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
    this.rooms.clear();
    this.danMus.clear();
  }
}
