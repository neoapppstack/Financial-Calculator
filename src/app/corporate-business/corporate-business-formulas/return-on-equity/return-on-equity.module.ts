import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnOnEquityRoutingModule } from './return-on-equity-routing.module';
import { ReturnOnEquityComponent } from './return-on-equity.component';
import { ReturnOnEquityCalComponent } from './return-on-equity-cal/return-on-equity-cal.component';

@NgModule({
  declarations: [ReturnOnEquityComponent, ReturnOnEquityCalComponent],
  imports: [
    CommonModule,
    ReturnOnEquityRoutingModule,
    FormulaDefinationModule
  ]
})
export class ReturnOnEquityModule { }
