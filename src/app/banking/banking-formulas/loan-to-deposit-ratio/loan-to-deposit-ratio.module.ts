import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanToDepositRatioRoutingModule } from './loan-to-deposit-ratio-routing.module';
import { LoanToDepositRatioComponent } from './loan-to-deposit-ratio.component';
import { LoanToDepositRatioCalComponent } from './loan-to-deposit-ratio-cal/loan-to-deposit-ratio-cal.component';

@NgModule({
  declarations: [LoanToDepositRatioComponent, LoanToDepositRatioCalComponent],
  imports: [
    CommonModule,
    LoanToDepositRatioRoutingModule,
    FormulaDefinitionModule
  ]
})
export class LoanToDepositRatioModule { }
