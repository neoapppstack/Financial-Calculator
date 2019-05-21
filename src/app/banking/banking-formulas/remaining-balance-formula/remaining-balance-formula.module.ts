import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemainingBalanceFormulaRoutingModule } from './remaining-balance-formula-routing.module';
import { RemainingBalanceFormulaComponent } from './remaining-balance-formula.component';
import { RemainingBalanceFormulaCalComponent } from './remaining-balance-formula-cal/remaining-balance-formula-cal.component';

@NgModule({
  declarations: [RemainingBalanceFormulaComponent, RemainingBalanceFormulaCalComponent],
  imports: [
    CommonModule,
    RemainingBalanceFormulaRoutingModule,
    FormulaDefinitionModule
  ]
})
export class RemainingBalanceFormulaModule { }
