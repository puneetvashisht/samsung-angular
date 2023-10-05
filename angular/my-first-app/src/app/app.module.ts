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
import { ViewEmployeesComponent } from './employees/view-employees/view-employees.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, MessageComponent, BadgeComponent, DropdownComponent, DropdownItemComponent, PipesDemoComponent, SearchPipe, ViewEmployeesComponent, AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
