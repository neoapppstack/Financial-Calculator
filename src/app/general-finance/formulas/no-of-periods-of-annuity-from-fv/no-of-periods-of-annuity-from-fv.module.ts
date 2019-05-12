import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoOfPeriodsOfAnnuityFromFVRoutingModule } from './no-of-periods-of-annuity-from-fv-routing.module';
import { NoOfPeriodsOfAnnuityFromFVComponent } from './no-of-periods-of-annuity-from-fv.component';
import { NoOfPeriodsOfAnnuityFromFvCalComponent } from './no-of-periods-of-annuity-from-fv-cal/no-of-periods-of-annuity-from-fv-cal.component';

@NgModule({
  declarations: [NoOfPeriodsOfAnnuityFromFVComponent, NoOfPeriodsOfAnnuityFromFvCalComponent],
  imports: [
    CommonModule,
    NoOfPeriodsOfAnnuityFromFVRoutingModule,
    FormulaDefinationModule
  ]
})
export class NoOfPeriodsOfAnnuityFromFVModule { }
