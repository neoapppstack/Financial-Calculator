import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnuityDuePaymentPvRoutingModule } from './annuity-due-payment-pv-routing.module';
import { AnnuityDuePaymentPvComponent } from './annuity-due-payment-pv.component';
import { AnnuityDuePaymentPvCalComponent } from './annuity-due-payment-pv-cal/annuity-due-payment-pv-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [AnnuityDuePaymentPvComponent, AnnuityDuePaymentPvCalComponent],
  imports: [
    CommonModule,
    AnnuityDuePaymentPvRoutingModule,
    FormulaDefinitionModule
  ]
})
export class AnnuityDuePaymentPvModule { }
