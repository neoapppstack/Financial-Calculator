import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrowingAnnuityPaymentFromFutureValueComponent } from './growing-annuity-payment-from-future-value.component';

const routes: Routes = [
  {
    path: '',
    component: GrowingAnnuityPaymentFromFutureValueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrowingAnnuityPaymentFromFutureValueRoutingModule { }
