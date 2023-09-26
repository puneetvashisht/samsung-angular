import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMessageComponent } from './components/add-message/add-message.component';
import { ViewMessageComponent } from './components/view-message/view-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'
import {MatListModule} from '@angular/material/list';
import { MessageService } from './services/message.service';


@NgModule({
  declarations: [
    AppComponent,
    AddMessageComponent,
    ViewMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
