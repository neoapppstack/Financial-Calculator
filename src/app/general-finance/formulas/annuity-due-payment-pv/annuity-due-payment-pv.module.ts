import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnuityDuePaymentPvRoutingModule } from './annuity-due-payment-pv-routing.module';
import { AnnuityDuePaymentPvComponent } from './annuity-due-payment-pv.component';
import { AnnuityDuePaymentPvCalComponent } from './annuity-due-payment-pv-cal/annuity-due-payment-pv-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [AnnuityDuePaymentPvComponent, AnnuityDuePaymentPvCalComponent],
  imports: [
    CommonModule,
    AnnuityDuePaymentPvRoutingModule,
    FormulaDefinationModule
  ]
})
export class AnnuityDuePaymentPvModule { }
