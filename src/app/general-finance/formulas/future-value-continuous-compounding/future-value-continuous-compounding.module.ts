import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FutureValueContinuousCompoundingRoutingModule } from './future-value-continuous-compounding-routing.module';
import { FutureValueContinuousCompoundingComponent } from './future-value-continuous-compounding.component';
import { FutureValueContinuousCompoundingCalComponent } from './future-value-continuous-compounding-cal/future-value-continuous-compounding-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [FutureValueContinuousCompoundingComponent, FutureValueContinuousCompoundingCalComponent],
  imports: [
    CommonModule,
    FutureValueContinuousCompoundingRoutingModule,
    FormulaDefinationModule
  ]
})
export class FutureValueContinuousCompoundingModule { }
