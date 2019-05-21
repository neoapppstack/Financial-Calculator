import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoublingTimeContinuousCompoundingRoutingModule } from './doubling-time-continuous-compounding-routing.module';
import { DoublingTimeContinuousCompoundingComponent } from './doubling-time-continuous-compounding.component';
import { DoublingTimeContinuousCompoundingCalComponent } from './doubling-time-continuous-compounding-cal/doubling-time-continuous-compounding-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [DoublingTimeContinuousCompoundingComponent, DoublingTimeContinuousCompoundingCalComponent],
  imports: [
    CommonModule,
    DoublingTimeContinuousCompoundingRoutingModule,
    FormulaDefinitionModule
  ]
})
export class DoublingTimeContinuousCompoundingModule { }
