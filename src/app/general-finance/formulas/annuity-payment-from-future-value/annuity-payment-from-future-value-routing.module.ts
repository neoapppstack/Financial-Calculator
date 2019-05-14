import { AnnuityPaymentFromFutureValueComponent } from './annuity-payment-from-future-value.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AnnuityPaymentFromFutureValueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnuityPaymentFromFutureValueRoutingModule { }
