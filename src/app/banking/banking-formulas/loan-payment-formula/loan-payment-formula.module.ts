import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanPaymentFormulaRoutingModule } from './loan-payment-formula-routing.module';
import { LoanPaymentFormulaComponent } from './loan-payment-formula.component';
import { LoanPaymentFormulaCalComponent } from './loan-payment-formula-cal/loan-payment-formula-cal.component';

@NgModule({
  declarations: [LoanPaymentFormulaComponent, LoanPaymentFormulaCalComponent],
  imports: [
    CommonModule,
    LoanPaymentFormulaRoutingModule,
    FormulaDefinationModule
  ]
})
export class LoanPaymentFormulaModule { }
