import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageComponent } from './message.component';
import { BadgeComponent } from './badge/badge.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { SearchPipe } from './search.pipe';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, MessageComponent, BadgeComponent, DropdownComponent, DropdownItemComponent, PipesDemoComponent, SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
