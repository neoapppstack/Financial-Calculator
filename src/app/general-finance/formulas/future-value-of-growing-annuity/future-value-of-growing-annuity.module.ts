import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FutureValueOfGrowingAnnuityRoutingModule } from './future-value-of-growing-annuity-routing.module';
import { FutureValueOfGrowingAnnuityComponent } from './future-value-of-growing-annuity.component';
import { FutureValueOfGrowingAnnuityCalComponent } from './future-value-of-growing-annuity-cal/future-value-of-growing-annuity-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [FutureValueOfGrowingAnnuityComponent, FutureValueOfGrowingAnnuityCalComponent],
  imports: [
    CommonModule,
    FutureValueOfGrowingAnnuityRoutingModule,
    FormulaDefinationModule
  ]
})
export class FutureValueOfGrowingAnnuityModule { }
