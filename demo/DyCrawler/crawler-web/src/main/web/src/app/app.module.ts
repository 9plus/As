import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './common/material.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetaiComponent } from './detai/detai.component';
import { AsHttp } from './service/as-http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  // 定义属于该模块下的组件
  declarations: [
    AppComponent,
    HomeComponent,
    DetaiComponent,
  ],
  // 给某模块导入就等同于给该某块下所有declaratons中声明的组件导入module
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  // 给某模块导入就等同于给改某块下所有declaratons中声明的组件创建注入器
  // Angular中的与逻辑相关的代码最好抽象成服务，通过注入来让组件使用
  // 可以在服务类中用providedIn: 'root' 来提供应用级的注入，也可以如下
  // providers: [AsHttp],
  // 只有根模块可以定义bootstrap属性
  bootstrap: [AppComponent]
})
export class AppModule { }
