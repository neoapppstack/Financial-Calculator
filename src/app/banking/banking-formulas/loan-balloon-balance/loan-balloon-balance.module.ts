import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanBalloonBalanceRoutingModule } from './loan-balloon-balance-routing.module';
import { LoanBalloonBalanceComponent } from './loan-balloon-balance.component';
import { LoanBalloonBalanceCalComponent } from './loan-balloon-balance-cal/loan-balloon-balance-cal.component';

@NgModule({
  declarations: [LoanBalloonBalanceComponent, LoanBalloonBalanceCalComponent],
  imports: [
    CommonModule,
    LoanBalloonBalanceRoutingModule,
    FormulaDefinationModule
  ]
})
export class LoanBalloonBalanceModule { }
