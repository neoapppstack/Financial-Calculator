import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrowingAnnuityPaymentRoutingModule } from './growing-annuity-payment-routing.module';
import { GrowingAnnuityPaymentComponent } from './growing-annuity-payment.component';
import { GrowingAnnuityPaymentCalComponent } from './growing-annuity-payment-cal/growing-annuity-payment-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [GrowingAnnuityPaymentComponent, GrowingAnnuityPaymentCalComponent],
  imports: [
    CommonModule,
    GrowingAnnuityPaymentRoutingModule,
    FormulaDefinitionModule
  ]
})
export class GrowingAnnuityPaymentModule { }
