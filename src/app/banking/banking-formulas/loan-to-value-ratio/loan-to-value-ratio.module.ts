import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
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
    FormulaDefinitionModule
  ]
})
export class LoanToValueRatioModule { }
