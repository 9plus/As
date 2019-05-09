import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AsHttp } from '../service/as-http.service';
import { HomeUtil } from '../common/home.util';

export interface DanMu {
  card: string;
  name: string;
  text: string;
  time: string;
  room: number;
  streamer: string;
}

/**
 * Angular 中文文档 https://angular.cn/guide/router
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{

  danMus: DanMu[] = [
    { card: 'js', name: 'user1', text: 'hello', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 2009, streamer: '09'},
    { card: 'js', name: 'user1', text: 'hello', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 2009, streamer: '09'},
    { card: 'js', name: 'user1', text: 'hello', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 2009, streamer: '09'},
    { card: 'js', name: 'user1', text: 'hello', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 2009, streamer: '09'},
    { card: 'js', name: 'user1', text: 'hello', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 2009, streamer: '09'},
    { card: 'js', name: 'user1', text: 'hello', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 2009, streamer: '09'},
    { card: 'js', name: 'user1', text: 'hello', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 2009, streamer: '09'},
    { card: 'js', name: 'user1', text: 'hello', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 2009, streamer: '09'},

    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 2009, streamer: '09'},
    { card: 'js', name: 'user1', text: 'hello', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 2009, streamer: '09'},
    { card: 'js', name: 'user1', text: 'hello', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 2009, streamer: '09'},
    { card: 'js', name: 'user1', text: 'hello', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 2009, streamer: '09'},
    { card: 'js', name: 'user1', text: 'hello', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 2009, streamer: '09'},
  ];

  currentDanMus: DanMu[] = [];
  currentPage: number;
  currentRoom: number;

  danMuByRoom: Map<string, DanMu[]> = new Map();

  rooms: string[];

  danMuPageSize: number;
  pages: number[] = [];

  constructor(
    private httpClient: AsHttp
  ) {}

  ngOnInit() {
    this.handleData(this.danMus);
    
  }

  public ngAfterViewInit() {
    this.updateDanMu(this.rooms[this.currentRoom]);
  }

  public getDanMu(name: string): void {
    // const that = this;
    // const param = {'name': name, 'count': queryCount, 'skipCount': skipCount};
    // this.httpClient.get(HomeUtil.DANMU_QUERY_URL, param, function(res: Array<DanMu>) {
    //   that.danMus = res;
    // });
    this.handleData(this.danMus);
  }

  public handleData(data: DanMu[]): void {
    let roomSet: Set<string> = new Set();
    for (let dm of data) {
      if (!this.danMuByRoom[dm.streamer]) {
        this.danMuByRoom[dm.streamer] = [];
      }
      this.danMuByRoom[dm.streamer].push(dm);
      roomSet.add(dm.streamer);
    }
    this.rooms = Array.from(roomSet);
  }

  public updateDanMu(room: string): void {
    this.currentDanMus = this.danMuByRoom[room];

    this.danMuPageSize = Math.ceil(1.0 * this.currentDanMus.length / HomeUtil.PAGE_DANMU_SIZE);
    for (let i = 1; i <= this.danMuPageSize; i++) {
      this.pages.push(i);
    }

    let start: number = this.currentPage <= 0 ? 0 : (this.currentPage - 1) * HomeUtil.PAGE_DANMU_SIZE;
    let end: number = this.currentPage * HomeUtil.PAGE_DANMU_SIZE;

    this.currentDanMus = this.currentDanMus.slice(start, end);
  } 
}
