import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentValueOfAnnuityRoutingModule } from './present-value-of-annuity-routing.module';
import { PresentValueOfAnnuityCalComponent } from './present-value-of-annuity-cal/present-value-of-annuity-cal.component';
import { PresentValueOfAnnuityComponent } from './present-value-of-annuity.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [PresentValueOfAnnuityComponent, PresentValueOfAnnuityCalComponent],
  imports: [
    CommonModule,
    PresentValueOfAnnuityRoutingModule,
    FormulaDefinitionModule
  ]
})
export class PresentValueOfAnnuityModule { }
