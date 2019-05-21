import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentValueOfAnnuityDueRoutingModule } from './present-value-of-annuity-due-routing.module';
import { PresentValueOfAnnuityDueComponent } from './present-value-of-annuity-due.component';
import { PresentValueOfAnnuityDueCalComponent } from './present-value-of-annuity-due-cal/present-value-of-annuity-due-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [PresentValueOfAnnuityDueComponent, PresentValueOfAnnuityDueCalComponent],
  imports: [
    CommonModule,
    PresentValueOfAnnuityDueRoutingModule,
    FormulaDefinitionModule
  ]
})
export class PresentValueOfAnnuityDueModule { }
