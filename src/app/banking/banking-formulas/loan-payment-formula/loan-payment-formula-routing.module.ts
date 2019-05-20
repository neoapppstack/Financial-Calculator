import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanPaymentFormulaComponent } from './loan-payment-formula.component';

const routes: Routes = [
  {
    path: '',
    component: LoanPaymentFormulaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanPaymentFormulaRoutingModule { }
