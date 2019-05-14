import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentValueOfAnnuityRoutingModule } from './present-value-of-annuity-routing.module';
import { PresentValueOfAnnuityCalComponent } from './present-value-of-annuity-cal/present-value-of-annuity-cal.component';
import { PresentValueOfAnnuityComponent } from './present-value-of-annuity.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [PresentValueOfAnnuityComponent, PresentValueOfAnnuityCalComponent],
  imports: [
    CommonModule,
    PresentValueOfAnnuityRoutingModule,
    FormulaDefinationModule
  ]
})
export class PresentValueOfAnnuityModule { }
