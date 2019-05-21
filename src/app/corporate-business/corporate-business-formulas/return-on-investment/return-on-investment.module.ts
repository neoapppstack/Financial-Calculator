import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnOnInvestmentRoutingModule } from './return-on-investment-routing.module';
import { ReturnOnInvestmentComponent } from './return-on-investment.component';
import { ReturnOnInvestmentCalComponent } from './return-on-investment-cal/return-on-investment-cal.component';

@NgModule({
  declarations: [ReturnOnInvestmentComponent, ReturnOnInvestmentCalComponent],
  imports: [
    CommonModule,
    ReturnOnInvestmentRoutingModule,
    FormulaDefinationModule
  ]
})
export class ReturnOnInvestmentModule { }
