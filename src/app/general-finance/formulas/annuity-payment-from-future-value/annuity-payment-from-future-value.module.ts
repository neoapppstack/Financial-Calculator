import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnuityPaymentFromFutureValueRoutingModule } from './annuity-payment-from-future-value-routing.module';
import { AnnuityPaymentFromFutureValueComponent } from './annuity-payment-from-future-value.component';
import { AnnuityPaymentFromFutureValueCalComponent } from './annuity-payment-from-future-value-cal/annuity-payment-from-future-value-cal.component';

@NgModule({
  declarations: [
    AnnuityPaymentFromFutureValueComponent,
    AnnuityPaymentFromFutureValueCalComponent],
  imports: [
    CommonModule,
    AnnuityPaymentFromFutureValueRoutingModule,
    FormulaDefinationModule
  ]
})
export class AnnuityPaymentFromFutureValueModule { }
