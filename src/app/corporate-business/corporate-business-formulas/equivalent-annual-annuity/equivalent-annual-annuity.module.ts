import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquivalentAnnualAnnuityRoutingModule } from './equivalent-annual-annuity-routing.module';
import { EquivalentAnnualAnnuityComponent } from './equivalent-annual-annuity.component';
import { EquivalentAnnualAnnuityCalComponent } from './equivalent-annual-annuity-cal/equivalent-annual-annuity-cal.component';

@NgModule({
  declarations: [EquivalentAnnualAnnuityComponent, EquivalentAnnualAnnuityCalComponent],
  imports: [
    CommonModule,
    EquivalentAnnualAnnuityRoutingModule,
    FormulaDefinationModule
  ]
})
export class EquivalentAnnualAnnuityModule { }
