import { Component, OnInit, Input } from '@angular/core';

/**
 * 在common目录下这样执行
 * ng g m as-paginator
 * ng g c as-paginator --module=app.module
 */
@Component({
  selector: 'app-as-paginator',
  templateUrl: './as-paginator.component.html',
  styleUrls: ['./as-paginator.component.css']
})
export class AsPaginatorComponent implements OnInit {

  @Input() dataSource: any;
  @Input() pageIndex: number;
  @Input() pageSize: number;

  options: number[] = [1, 2, 3, 4];

  constructor() { }

  ngOnInit() {
  }

}
