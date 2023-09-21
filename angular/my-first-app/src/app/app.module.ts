import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageComponent } from './message.component';
import { BadgeComponent } from './badge/badge.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';


@NgModule({
  declarations: [
    AppComponent, MessageComponent, BadgeComponent, DropdownComponent, DropdownItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
