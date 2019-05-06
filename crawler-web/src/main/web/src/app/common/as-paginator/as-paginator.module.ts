import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsPaginatorComponent } from './as-paginator.component';
import { MaterialModule } from '../material.module'

@NgModule({
  declarations: [AsPaginatorComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AsPaginatorComponent,
  ]
})
export class AsPaginatorModule { }
