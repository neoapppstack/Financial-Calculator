import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolveForNumberOfPeriodsPvAndFvRoutingModule } from './solve-for-number-of-periods-pv-and-fv-routing.module';
import { SolveForNumberOfPeriodsPvAndFvComponent } from './solve-for-number-of-periods-pv-and-fv.component';
import { SolveForNumberOfPeriodsPvAndFvCalComponent } from './solve-for-number-of-periods-pv-and-fv-cal/solve-for-number-of-periods-pv-and-fv-cal.component';

@NgModule({
  declarations: [SolveForNumberOfPeriodsPvAndFvComponent, SolveForNumberOfPeriodsPvAndFvCalComponent],
  imports: [
    CommonModule,
    SolveForNumberOfPeriodsPvAndFvRoutingModule,
    FormulaDefinationModule
  ]
})
export class SolveForNumberOfPeriodsPvAndFvModule { }
