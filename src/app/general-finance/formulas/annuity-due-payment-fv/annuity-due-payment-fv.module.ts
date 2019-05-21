import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnuityDuePaymentFvRoutingModule } from './annuity-due-payment-fv-routing.module';
import { AnnuityDuePaymentFvComponent } from './annuity-due-payment-fv.component';
import { AnnuityDuePaymentFvCalComponent } from './annuity-due-payment-fv-cal/annuity-due-payment-fv-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [AnnuityDuePaymentFvComponent, AnnuityDuePaymentFvCalComponent],
  imports: [
    CommonModule,
    AnnuityDuePaymentFvRoutingModule,
    FormulaDefinitionModule
  ]
})
export class AnnuityDuePaymentFvModule { }
