import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentValueContinuousCompoundingRoutingModule } from './present-value-continuous-compounding-routing.module';
import { PresentValueContinuousCompoundingComponent } from './present-value-continuous-compounding.component';
import { PresentValueContinuousCompoundingCalComponent } from './present-value-continuous-compounding-cal/present-value-continuous-compounding-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [PresentValueContinuousCompoundingComponent, PresentValueContinuousCompoundingCalComponent],
  imports: [
    CommonModule,
    PresentValueContinuousCompoundingRoutingModule,
    FormulaDefinitionModule
  ]
})
export class PresentValueContinuousCompoundingModule { }
