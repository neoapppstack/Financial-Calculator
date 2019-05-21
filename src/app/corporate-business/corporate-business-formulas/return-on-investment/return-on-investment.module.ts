import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
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
    FormulaDefinitionModule
  ]
})
export class ReturnOnInvestmentModule { }
