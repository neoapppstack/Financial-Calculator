import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrowingAnnuityPaymentComponent } from './growing-annuity-payment.component';

const routes: Routes = [
  {
    path: '',
    component: GrowingAnnuityPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrowingAnnuityPaymentRoutingModule { }
