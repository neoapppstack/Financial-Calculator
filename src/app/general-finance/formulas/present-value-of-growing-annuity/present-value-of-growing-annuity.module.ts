import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentValueOfGrowingAnnuityRoutingModule } from './present-value-of-growing-annuity-routing.module';
import { PresentValueOfGrowingAnnuityComponent } from './present-value-of-growing-annuity.component';
import { PresentValueOfGrowingAnnuityCalComponent } from './present-value-of-growing-annuity-cal/present-value-of-growing-annuity-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [PresentValueOfGrowingAnnuityComponent, PresentValueOfGrowingAnnuityCalComponent],
  imports: [
    CommonModule,
    PresentValueOfGrowingAnnuityRoutingModule,
    FormulaDefinitionModule
  ]
})
export class PresentValueOfGrowingAnnuityModule { }
