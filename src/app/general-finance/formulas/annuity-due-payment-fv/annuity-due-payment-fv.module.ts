import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnuityDuePaymentFvRoutingModule } from './annuity-due-payment-fv-routing.module';
import { AnnuityDuePaymentFvComponent } from './annuity-due-payment-fv.component';
import { AnnuityDuePaymentFvCalComponent } from './annuity-due-payment-fv-cal/annuity-due-payment-fv-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [AnnuityDuePaymentFvComponent, AnnuityDuePaymentFvCalComponent],
  imports: [
    CommonModule,
    AnnuityDuePaymentFvRoutingModule,
    FormulaDefinationModule
  ]
})
export class AnnuityDuePaymentFvModule { }
