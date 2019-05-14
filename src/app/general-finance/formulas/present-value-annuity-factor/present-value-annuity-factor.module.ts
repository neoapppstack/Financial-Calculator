import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentValueAnnuityFactorRoutingModule } from './present-value-annuity-factor-routing.module';
import { PresentValueAnnuityFactorComponent } from './present-value-annuity-factor.component';
import { PresentValueAnnuityFactorCalComponent } from './present-value-annuity-factor-cal/present-value-annuity-factor-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [PresentValueAnnuityFactorComponent, PresentValueAnnuityFactorCalComponent],
  imports: [
    CommonModule,
    PresentValueAnnuityFactorRoutingModule,
    FormulaDefinationModule
  ]
})
export class PresentValueAnnuityFactorModule { }
