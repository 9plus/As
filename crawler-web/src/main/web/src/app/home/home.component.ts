import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatPaginator, MatTableDataSource, TooltipPosition } from '@angular/material';
import { AsHttp } from '../service/as-http.service';
import { HomeUtil, DanMu } from '../common/home.util';
import { DyUser } from '../common/dy.user';
import { FormControl } from '@angular/forms';

/**
 * Angular 中文文档 https://angular.cn/guide/router
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{

  danMus: DanMu[] = [];

  /** ??????????????? ?????????????????? */
  currentDanMus: DanMu[] = [];
  userName: string; // ???
  rooms: number[] = []; // ??????????????
  streamers: string[] = []; // ????????????
  pages: number[] = []; // ?????????
  pageCount: number; // ???

  dyUser: DyUser;

  selectedPage: number; // ???????
  selectedRoomIndex: number; // ????????index 0,1,2...

  constructor(
    private httpClient: AsHttp
  ) {}

  ngOnInit() {
    this.dyUser = new DyUser();
  }

  public ngAfterViewInit() {
  }

  public getRandomName(): void {
    const that = this;
    this.httpClient.get(HomeUtil.RANDOM_NAME_URL, 'text', {}, function (res: any) {
      that.userName = res;
    });
  }

  public search(name: string): void {
    if (!name || name === '') {
      return;
    }
    this.clearViewInfo();
    this.getDanMu(name);
    console.log(this.danMus);
    this.initDyUser(name);
    this.show();
  }

  public initDyUser(name: string): void {
    this.dyUser.clear();
    this.dyUser.name = name;
    console.log(this.danMus);
    for (const danMu of this.danMus) {
      console.log('111111');
      if (!this.dyUser.danMus.get(danMu.roomId)) {
        this.dyUser.danMus.set(danMu.roomId, []);
      }
      this.dyUser.danMus.get(danMu.roomId).push(danMu);
      if (!this.dyUser.rooms.has(danMu.roomId)) {
        this.dyUser.rooms.set(danMu.roomId, '叫我老陈就好了');
      }
    }
  }

  public getDanMu(name: string): void {
    const param = {'userName': name};
    // tslint:disable-next-line:no-unused-expression
    this.httpClient.get(HomeUtil.DANMU_QUERY_URL, 'json', param, (res) => {
      this.danMus = res;
    });
    console.log(this);
  }

  public show(): void {
    this.dyUser.rooms.forEach((value, key) => {
      this.rooms.push(key);
      this.streamers.push(value);
    });
    setTimeout(() => {
      console.log(this.dyUser);
      this.currentDanMus = this.dyUser.danMus.get(this.rooms[this.selectedRoomIndex ? this.selectedRoomIndex : 0]);
      this.pageCount = Math.ceil(1.0 * this.currentDanMus.length / HomeUtil.PAGE_DANMU_SIZE);
      for (let i = 1; i <= this.pageCount; i++) {
        this.pages.push(i);
      }
      this.selectedPage = 1;
      this.currentDanMus = this.currentDanMus.slice(0, HomeUtil.PAGE_DANMU_SIZE);
    });
  }

  public onRoomChanged(): void {
    console.log('on room change');
    this.currentDanMus = this.dyUser.danMus.get(this.rooms[this.selectedRoomIndex ? this.selectedRoomIndex : 0]);
    this.pages = [];
    this.pageCount = Math.ceil(1.0 * this.currentDanMus.length / HomeUtil.PAGE_DANMU_SIZE);
    for (let i = 1; i <= this.pageCount; i++) {
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
    const start: number = (this.selectedPage - 1) * HomeUtil.PAGE_DANMU_SIZE;
    const end: number = this.selectedPage * HomeUtil.PAGE_DANMU_SIZE;
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

  public clearViewInfo(): void {
    this.rooms = [];
    this.streamers = [];
    this.currentDanMus = [];
    this.pages = [];
  }
}
