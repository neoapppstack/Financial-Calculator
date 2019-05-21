import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoOfPeriodsOfAnnuityFromPvRoutingModule } from './no-of-periods-of-annuity-from-pv-routing.module';
import { NoOfPeriodsOfAnnuityFromPvComponent } from './no-of-periods-of-annuity-from-pv.component';
import { NoOfPeriodsOfAnnuityFromPvCalComponent } from './no-of-periods-of-annuity-from-pv-cal/no-of-periods-of-annuity-from-pv-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [NoOfPeriodsOfAnnuityFromPvComponent, NoOfPeriodsOfAnnuityFromPvCalComponent],
  imports: [
    CommonModule,
    NoOfPeriodsOfAnnuityFromPvRoutingModule,
    FormulaDefinitionModule
  ]
})
export class NoOfPeriodsOfAnnuityFromPvModule { }
