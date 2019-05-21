import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FutureValueOfGrowingAnnuityRoutingModule } from './future-value-of-growing-annuity-routing.module';
import { FutureValueOfGrowingAnnuityComponent } from './future-value-of-growing-annuity.component';
import { FutureValueOfGrowingAnnuityCalComponent } from './future-value-of-growing-annuity-cal/future-value-of-growing-annuity-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [FutureValueOfGrowingAnnuityComponent, FutureValueOfGrowingAnnuityCalComponent],
  imports: [
    CommonModule,
    FutureValueOfGrowingAnnuityRoutingModule,
    FormulaDefinitionModule
  ]
})
export class FutureValueOfGrowingAnnuityModule { }
