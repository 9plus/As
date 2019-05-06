import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'as-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() dataSource: any;
  @Input() pageIndex: number;
  @Input() pageSize: number;

  options: number[] = [1, 2, 3, 4];
  constructor() { }

  ngOnInit() {
  }

}
