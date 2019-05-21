import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnualPercentageYieldRoutingModule } from './annual-percentage-yield-routing.module';
import { AnnualPercentageYieldComponent } from './annual-percentage-yield.component';
import { AnnualPercentageYieldCalComponent } from './annual-percentage-yield-cal/annual-percentage-yield-cal.component';

@NgModule({
  declarations: [AnnualPercentageYieldComponent, AnnualPercentageYieldCalComponent],
  imports: [
    CommonModule,
    AnnualPercentageYieldRoutingModule,
    FormulaDefinationModule
  ]
})
export class AnnualPercentageYieldModule { }
