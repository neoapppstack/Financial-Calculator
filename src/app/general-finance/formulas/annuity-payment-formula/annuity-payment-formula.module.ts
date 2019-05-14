import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnuityPaymentFormulaRoutingModule } from './annuity-payment-formula-routing.module';
import { AnnuityPaymentFormulaComponent } from './annuity-payment-formula.component';
import { AnnuityPaymentFormulaCalComponent } from './annuity-payment-formula-cal/annuity-payment-formula-cal.component';

@NgModule({
  declarations: [AnnuityPaymentFormulaComponent, AnnuityPaymentFormulaCalComponent],
  imports: [
    CommonModule,
    AnnuityPaymentFormulaRoutingModule,
    FormulaDefinationModule
  ]
})
export class AnnuityPaymentFormulaModule { }
