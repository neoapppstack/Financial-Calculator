import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrowingAnnuityPaymentFromFutureValueRoutingModule } from './growing-annuity-payment-from-future-value-routing.module';
import { GrowingAnnuityPaymentFromFutureValueComponent } from './growing-annuity-payment-from-future-value.component';
import { GrowingAnnuityPaymentFromFutureValueCalComponent } from './growing-annuity-payment-from-future-value-cal/growing-annuity-payment-from-future-value-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [GrowingAnnuityPaymentFromFutureValueComponent, GrowingAnnuityPaymentFromFutureValueCalComponent],
  imports: [
    CommonModule,
    GrowingAnnuityPaymentFromFutureValueRoutingModule,
    FormulaDefinitionModule
  ]
})
export class GrowingAnnuityPaymentFromFutureValueModule { }
