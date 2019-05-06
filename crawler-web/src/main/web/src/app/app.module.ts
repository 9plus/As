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
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetaiComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule, // inject AsHttp need this
    BrowserAnimationsModule,
  ],
  providers: [AsHttp], // inject AsHttp need providers it
  bootstrap: [AppComponent]
})
export class AppModule { }
