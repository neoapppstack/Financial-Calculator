import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnuityDuePaymentPvComponent } from './annuity-due-payment-pv.component';

const routes: Routes = [
  {
    path: '',
    component: AnnuityDuePaymentPvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnuityDuePaymentPvRoutingModule { }
