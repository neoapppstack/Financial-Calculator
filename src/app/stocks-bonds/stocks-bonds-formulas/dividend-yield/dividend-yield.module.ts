import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividendYieldRoutingModule } from './dividend-yield-routing.module';
import { DividendYieldComponent } from './dividend-yield.component';
import { DividendYieldCalComponent } from './dividend-yield-cal/dividend-yield-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [DividendYieldComponent, DividendYieldCalComponent],
  imports: [
    CommonModule,
    DividendYieldRoutingModule,
    FormulaDefinationModule
  ]
})
export class DividendYieldModule { }
