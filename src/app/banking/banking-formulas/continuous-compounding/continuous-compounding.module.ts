import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContinuousCompoundingRoutingModule } from './continuous-compounding-routing.module';
import { ContinuousCompoundingComponent } from './continuous-compounding.component';
import { ContinuousCompoundingCalComponent } from './continuous-compounding-cal/continuous-compounding-cal.component';

@NgModule({
  declarations: [ContinuousCompoundingComponent, ContinuousCompoundingCalComponent],
  imports: [
    CommonModule,
    ContinuousCompoundingRoutingModule,
    FormulaDefinitionModule
  ]
})
export class ContinuousCompoundingModule { }
