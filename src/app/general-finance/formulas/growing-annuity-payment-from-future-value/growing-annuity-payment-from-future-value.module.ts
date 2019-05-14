import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrowingAnnuityPaymentFromFutureValueRoutingModule } from './growing-annuity-payment-from-future-value-routing.module';
import { GrowingAnnuityPaymentFromFutureValueComponent } from './growing-annuity-payment-from-future-value.component';
import { GrowingAnnuityPaymentFromFutureValueCalComponent } from './growing-annuity-payment-from-future-value-cal/growing-annuity-payment-from-future-value-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [GrowingAnnuityPaymentFromFutureValueComponent, GrowingAnnuityPaymentFromFutureValueCalComponent],
  imports: [
    CommonModule,
    GrowingAnnuityPaymentFromFutureValueRoutingModule,
    FormulaDefinationModule
  ]
})
export class GrowingAnnuityPaymentFromFutureValueModule { }
