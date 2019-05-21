import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaybackPeriodRoutingModule } from './payback-period-routing.module';
import { PaybackPeriodComponent } from './payback-period.component';
import { PaybackPeriodCalComponent } from './payback-period-cal/payback-period-cal.component';

@NgModule({
  declarations: [PaybackPeriodComponent, PaybackPeriodCalComponent],
  imports: [
    CommonModule,
    PaybackPeriodRoutingModule,
    FormulaDefinationModule
  ]
})
export class PaybackPeriodModule { }
