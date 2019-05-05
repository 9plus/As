import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface DanMu {
  id: number;
  name: string;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{

  HERO: DanMu[] = [
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
  dataSource = new MatTableDataSource<DanMu>(this.HERO);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; // or use setTimeout(() => this.dataSource.paginator = this.paginator);
  }
}
