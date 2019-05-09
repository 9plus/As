import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AsHttp } from '../service/as-http.service';
import { HomeUtil, DanMu } from '../common/home.util';
import { DyUser } from '../common/dy.user';

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

  rooms: string[];

  dyUser: DyUser;

  danMuPageSize: number;
  pages: number[] = [];

  constructor(
    private httpClient: AsHttp
  ) {}

  ngOnInit() {
    this.dyUser = new DyUser();
  }

  public ngAfterViewInit() {
  }

  public search(name: string): void {
    this.initDyUser(name);
    this.show();
  }

  public initDyUser(name: string): void {
    this.dyUser.clear();

    this.dyUser.name = name;
    for(let danMu of this.getDanMu(name)) {
      if(!this.dyUser[danMu.room]) {
        this.dyUser.danMus[danMu.room] = []
      }
      this.dyUser.danMus[danMu.room].push(danMu);
      if (!this.dyUser.rooms.has(danMu.room)) {
        this.dyUser.rooms[danMu.room] = danMu.streamer;
      }
    }
    this.dyUser.cards = this.getCards(name);
  }

  public getDanMu(name: string): DanMu[] {
    // const that = this;
    // const param = {'name': name, 'count': queryCount, 'skipCount': skipCount};
    // this.httpClient.get(HomeUtil.DANMU_QUERY_URL, param, function(res: Array<DanMu>) {
    //   that.danMus = res;
    // });
    return this.danMus;
  }

  public getCards(name: string): string[] {
    return ['xiaojiangshi', 'jituanjun'];
  }

  public show(): void {
    this.rooms = Array.from(this.dyUser.rooms.values());
    this.currentDanMus = this.dyUser.danMus[this.currentRoom];
    this.danMuPageSize = Math.ceil(1.0 * this.currentDanMus.length / HomeUtil.PAGE_DANMU_SIZE);
    for (let i = 1; i <= this.danMuPageSize; i++) {
      this.pages.push(i);
    }

    this.currentDanMus = this.currentDanMus.slice(0, HomeUtil.PAGE_DANMU_SIZE);
  }

  public onRoomChanged(): void {
    this.currentDanMus = this.dyUser.danMus[this.currentRoom];
    this.pages = [];
    this.danMuPageSize = Math.ceil(1.0 * this.currentDanMus.length / HomeUtil.PAGE_DANMU_SIZE);
    for (let i = 1; i <= this.danMuPageSize; i++) {
      this.pages.push(i);
    }

    this.currentDanMus = this.currentDanMus.slice(0, HomeUtil.PAGE_DANMU_SIZE);
  }

  public onPageChanged(): void {
    this.currentDanMus = this.dyUser.danMus[this.currentRoom];
    let start: number = this.currentPage <= 0 ? 0 : (this.currentPage - 1) * HomeUtil.PAGE_DANMU_SIZE;
    let end: number = this.currentPage * HomeUtil.PAGE_DANMU_SIZE;
    this.currentDanMus = this.currentDanMus.slice(start, end);
  }
}
