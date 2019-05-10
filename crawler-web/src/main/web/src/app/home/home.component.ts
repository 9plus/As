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
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
    { card: 'js', name: 'user2', text: 'byebye', time: '2019-5-9', room: 9999, streamer: 'fg'},
  ];

  currentDanMus: DanMu[] = [];
  selectedPage: number;
  selectedRoomIndex: number;

  rooms: number[] = [];
  streamers: string[] = [];

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
    this.clear();
    this.initDyUser(name);
    this.show();
  }

  public initDyUser(name: string): void {
    this.dyUser.clear();

    this.dyUser.name = name;
    for(let danMu of this.getDanMu(name)) {
      if(!this.dyUser.danMus.get(danMu.room)) {
        this.dyUser.danMus.set(danMu.room, []);
      }
      this.dyUser.danMus.get(danMu.room).push(danMu);
      if (!this.dyUser.rooms.has(danMu.room)) {
        this.dyUser.rooms.set(danMu.room, danMu.streamer);
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
    this.dyUser.rooms.forEach((value, key) => {
      this.rooms.push(key);
      this.streamers.push(value);
    });
    setTimeout(() => {
      this.currentDanMus = this.dyUser.danMus.get(this.rooms[this.selectedRoomIndex ? this.selectedRoomIndex : 0]);
      this.danMuPageSize = Math.ceil(1.0 * this.currentDanMus.length / HomeUtil.PAGE_DANMU_SIZE);
      for (let i = 1; i <= this.danMuPageSize; i++) {
        this.pages.push(i);
      }
      this.selectedPage = 1;
      this.currentDanMus = this.currentDanMus.slice(0, HomeUtil.PAGE_DANMU_SIZE);
    });
  }

  public onRoomChanged(): void {
    console.log("on room change");
    this.currentDanMus = this.dyUser.danMus.get(this.rooms[this.selectedRoomIndex ? this.selectedRoomIndex : 0]);
    this.pages = [];
    this.danMuPageSize = Math.ceil(1.0 * this.currentDanMus.length / HomeUtil.PAGE_DANMU_SIZE);
    for (let i = 1; i <= this.danMuPageSize; i++) {
      this.pages.push(i);
    }

    this.currentDanMus = this.currentDanMus.slice(0, HomeUtil.PAGE_DANMU_SIZE);
  }

  public onPageChanged(): void {
    console.log(`on page change and the index is : ${this.selectedPage}`);
    this.currentDanMus = this.dyUser.danMus.get(this.rooms[this.selectedRoomIndex ? this.selectedRoomIndex : 0]);
    if (!this.selectedPage || this.selectedPage <= 0) {
      this.selectedPage = 1;
    }
    let start: number = (this.selectedPage - 1) * HomeUtil.PAGE_DANMU_SIZE;
    let end: number = this.selectedPage * HomeUtil.PAGE_DANMU_SIZE;
    this.currentDanMus = this.currentDanMus.slice(start, end);
  }

  public onFirstPage(): void {
    this.selectedPage = 1;
    this.onPageChanged();
  }

  public onPrePage(): void {
    this.selectedPage = this.selectedPage <= 1 ? 1 : this.selectedPage - 1;
    this.onPageChanged();
  }

  public onNextPage(): void {
    this.selectedPage = this.selectedPage >= this.pages.length ? this.pages.length : this.selectedPage + 1;
    this.onPageChanged();
  }

  public onLastPage(): void {
    this.selectedPage = this.pages.length;
    this.onPageChanged();
  }

  public clear(): void {
    this.rooms = [];
    this.streamers = [];
    this.currentDanMus = [];
    this.pages = [];
  }
}
