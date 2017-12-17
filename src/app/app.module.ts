import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AsslsetComponent } from './component/asslset/asslset.component';
import { ProudctComponent } from './component/proudct/proudct.component';
import { AaaComponent } from './component/proudct/aaa/aaa.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent,
    HomeComponent,
    AsslsetComponent,
    ProudctComponent,
    AaaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
