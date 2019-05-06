import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AsHttp } from '../common/service/as-http.service';

export interface DanMu {
  id: number;
  name: string;
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

  danMu: DanMu[] = [
    { id: 1, name: 'gaogao' },
    { id: 2, name: 'wanlimm' },
    { id: 3, name: 'ssmay' },
    { id: 4, name: 'angular'},
    { id: 1, name: 'gaogao' },
    { id: 2, name: 'wanlimm' },
    { id: 3, name: 'ssmay' },
    { id: 1, name: 'gaogao' },
    { id: 2, name: 'wanlimm' },
    { id: 3, name: 'ssmay' },
  ];

  displayedColumns: string[] = ['id', 'name'];


  constructor(
    private httpClient: AsHttp
  ) {}

  ngOnInit() {
  }

  public ngAfterViewInit() {
  }

  public getDanMu(name: string, queryCount: number, skipCount: number): void {
    const that = this;
    const param = {'name': name, 'count': queryCount, 'skipCount': skipCount};
    this.httpClient.get('danmu/query', param, function(res: Array<DanMu>) {
      that.danMu = res;
    });
  }
}
