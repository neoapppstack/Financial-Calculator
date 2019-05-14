import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoublingTimeContinuousCompoundingRoutingModule } from './doubling-time-continuous-compounding-routing.module';
import { DoublingTimeContinuousCompoundingComponent } from './doubling-time-continuous-compounding.component';
import { DoublingTimeContinuousCompoundingCalComponent } from './doubling-time-continuous-compounding-cal/doubling-time-continuous-compounding-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [DoublingTimeContinuousCompoundingComponent, DoublingTimeContinuousCompoundingCalComponent],
  imports: [
    CommonModule,
    DoublingTimeContinuousCompoundingRoutingModule,
    FormulaDefinationModule
  ]
})
export class DoublingTimeContinuousCompoundingModule { }
