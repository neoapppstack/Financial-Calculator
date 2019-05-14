import { AnnuityPaymentFormulaComponent } from './annuity-payment-formula.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AnnuityPaymentFormulaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnuityPaymentFormulaRoutingModule { }
