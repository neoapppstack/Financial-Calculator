import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentValueContinuousCompoundingRoutingModule } from './present-value-continuous-compounding-routing.module';
import { PresentValueContinuousCompoundingComponent } from './present-value-continuous-compounding.component';
import { PresentValueContinuousCompoundingCalComponent } from './present-value-continuous-compounding-cal/present-value-continuous-compounding-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [PresentValueContinuousCompoundingComponent, PresentValueContinuousCompoundingCalComponent],
  imports: [
    CommonModule,
    PresentValueContinuousCompoundingRoutingModule,
    FormulaDefinationModule
  ]
})
export class PresentValueContinuousCompoundingModule { }
