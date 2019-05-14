import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnuityDuePaymentFvComponent } from './annuity-due-payment-fv.component';

const routes: Routes = [
  {
    path: '',
    component: AnnuityDuePaymentFvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnuityDuePaymentFvRoutingModule { }
