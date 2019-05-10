import {DanMu} from './home.util'

export class DyUser {

  name: string;
  rooms: Map<number, string>;
  cards: string[];
  danMus: Map<number, DanMu[]>;

  constructor() {
    this.name = '';
    this.rooms = new Map<number, string>();
    this.cards = [];
    this.danMus = new Map<number, DanMu[]>();
  }

  clear() {
    this.name = "";
    this.rooms.clear();
    this.cards = [];
    this.danMus.clear();
  }
}