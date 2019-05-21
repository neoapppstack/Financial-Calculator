import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FutureValueContinuousCompoundingRoutingModule } from './future-value-continuous-compounding-routing.module';
import { FutureValueContinuousCompoundingComponent } from './future-value-continuous-compounding.component';
import { FutureValueContinuousCompoundingCalComponent } from './future-value-continuous-compounding-cal/future-value-continuous-compounding-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [FutureValueContinuousCompoundingComponent, FutureValueContinuousCompoundingCalComponent],
  imports: [
    CommonModule,
    FutureValueContinuousCompoundingRoutingModule,
    FormulaDefinitionModule
  ]
})
export class FutureValueContinuousCompoundingModule { }
