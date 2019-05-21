import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanToValueRatioRoutingModule } from './loan-to-value-ratio-routing.module';
import { LoanToValueRatioComponent } from './loan-to-value-ratio.component';
import { LoanToValueRatioCalComponent } from './loan-to-value-ratio-cal/loan-to-value-ratio-cal.component';

@NgModule({
  declarations: [LoanToValueRatioComponent, LoanToValueRatioCalComponent],
  imports: [
    CommonModule,
    LoanToValueRatioRoutingModule,
    FormulaDefinationModule
  ]
})
export class LoanToValueRatioModule { }
