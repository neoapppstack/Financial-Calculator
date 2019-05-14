import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FutureValueFactorRoutingModule } from './future-value-factor-routing.module';
import { FutureValueFactorComponent } from './future-value-factor.component';
import { FutureValueFactorCalComponent } from './future-value-factor-cal/future-value-factor-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [FutureValueFactorComponent, FutureValueFactorCalComponent],
  imports: [
    CommonModule,
    FutureValueFactorRoutingModule,
    FormulaDefinationModule
  ]
})
export class FutureValueFactorModule { }
