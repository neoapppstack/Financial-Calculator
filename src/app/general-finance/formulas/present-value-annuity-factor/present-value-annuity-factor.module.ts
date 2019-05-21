import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentValueAnnuityFactorRoutingModule } from './present-value-annuity-factor-routing.module';
import { PresentValueAnnuityFactorComponent } from './present-value-annuity-factor.component';
import { PresentValueAnnuityFactorCalComponent } from './present-value-annuity-factor-cal/present-value-annuity-factor-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [PresentValueAnnuityFactorComponent, PresentValueAnnuityFactorCalComponent],
  imports: [
    CommonModule,
    PresentValueAnnuityFactorRoutingModule,
    FormulaDefinitionModule
  ]
})
export class PresentValueAnnuityFactorModule { }
