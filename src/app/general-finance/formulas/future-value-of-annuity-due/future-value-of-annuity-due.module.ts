import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FutureValueOfAnnuityDueRoutingModule } from './future-value-of-annuity-due-routing.module';
import { FutureValueOfAnnuityDueComponent } from './future-value-of-annuity-due.component';
import { FutureValueOfAnnuityDueCalComponent } from './future-value-of-annuity-due-cal/future-value-of-annuity-due-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [FutureValueOfAnnuityDueComponent, FutureValueOfAnnuityDueCalComponent],
  imports: [
    CommonModule,
    FutureValueOfAnnuityDueRoutingModule,
    FormulaDefinitionModule
  ]
})
export class FutureValueOfAnnuityDueModule { }
