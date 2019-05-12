import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FutureValueOfAnnuityRoutingModule } from './future-value-of-annuity-routing.module';
import { FutureValueOfAnnuityComponent } from './future-value-of-annuity.component';
import { FutureValueOfAnnityCalComponent } from './future-value-of-annity-cal/future-value-of-annity-cal.component';
@NgModule({
  declarations: [FutureValueOfAnnuityComponent, FutureValueOfAnnityCalComponent],
  imports: [
    CommonModule,
    FutureValueOfAnnuityRoutingModule,
    FormulaDefinationModule
  ]
})
export class FutureValueOfAnnuityModule { }
