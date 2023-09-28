import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMessageComponent } from './components/add-message/add-message.component';
import { ViewMessageComponent } from './components/view-message/view-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MessageService } from './services/message.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { ChangeDetectDemoComponent } from './components/change-detect-demo/change-detect-demo.component';
import { ChangeDetectDemo1Component } from './components/change-detect-demo1/change-detect-demo1.component';



@NgModule({
  declarations: [
    AppComponent,
    AddMessageComponent,
    ViewMessageComponent,
    LoginComponent,
    ChangeDetectDemoComponent,
    ChangeDetectDemo1Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule, 
    SharedModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
