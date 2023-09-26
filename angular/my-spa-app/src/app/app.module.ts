import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ViewEmployeesComponent } from './employees/view-employees/view-employees.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbModule, NgbRatingModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentModule } from './payment/payment.module';

const routes: Routes = [
  // Lazy Loaded
  {path : 'payments', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home',  component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'view', component: ViewEmployeesComponent},
  {path: 'add', component: AddEmployeeComponent},
  {path: 'update/:id', component: AddEmployeeComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }
 
]; 

@NgModule({
  declarations: [
    AppComponent, ViewEmployeesComponent, AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
