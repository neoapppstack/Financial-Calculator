import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
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
    FormulaDefinationModule
  ]
})
export class ContinuousCompoundingModule { }
