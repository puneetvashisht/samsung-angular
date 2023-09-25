import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ViewEmployeesComponent } from './employees/view-employees/view-employees.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'view', component: ViewEmployeesComponent},
  {path: 'add', component: AddEmployeeComponent},
]; 

@NgModule({
  declarations: [
    AppComponent, ViewEmployeesComponent, AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
