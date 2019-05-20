import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalloonLoanPaymentRoutingModule } from './balloon-loan-payment-routing.module';
import { BalloonLoanPaymentComponent } from './balloon-loan-payment.component';
import { BalloonLoanPaymentCalComponent } from './balloon-loan-payment-cal/balloon-loan-payment-cal.component';

@NgModule({
  declarations: [BalloonLoanPaymentComponent, BalloonLoanPaymentCalComponent],
  imports: [
    CommonModule,
    BalloonLoanPaymentRoutingModule
  ]
})
export class BalloonLoanPaymentModule { }
