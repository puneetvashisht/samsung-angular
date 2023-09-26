import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { MakePaymentComponent } from './components/make-payment/make-payment.component';
import { ConfirmPaymentComponent } from './components/confirm-payment/confirm-payment.component';


@NgModule({
  declarations: [
  
    ContainerComponent,
       MakePaymentComponent,
       ConfirmPaymentComponent
  ],
  imports: [
    // CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
