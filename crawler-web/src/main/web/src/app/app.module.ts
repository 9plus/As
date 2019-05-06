import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './common/material.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetaiComponent } from './detai/detai.component';
import { AsHttp } from './common/service/as-http.service';
import { HttpClientModule } from '@angular/common/http';
import { AsPaginatorModule } from './common/as-paginator/as-paginator.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetaiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule, // inject AsHttp need this
    BrowserAnimationsModule,
    AsPaginatorModule,
  ],
  providers: [AsHttp], // inject AsHttp need providers it
  bootstrap: [AppComponent]
})
export class AppModule { }
