import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { MakePaymentComponent } from './components/make-payment/make-payment.component';
import { ConfirmPaymentComponent } from './components/confirm-payment/confirm-payment.component';

const routes: Routes = [
  { path : 'container', component: ContainerComponent
  , children: [
    {path: 'make', component: MakePaymentComponent},
    {path: 'confirm', component: ConfirmPaymentComponent}

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
