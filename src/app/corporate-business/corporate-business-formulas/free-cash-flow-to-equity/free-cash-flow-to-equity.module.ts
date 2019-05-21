import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreeCashFlowToEquityRoutingModule } from './free-cash-flow-to-equity-routing.module';
import { FreeCashFlowToEquityComponent } from './free-cash-flow-to-equity.component';
import { FreeCashFlowToEquityCalComponent } from './free-cash-flow-to-equity-cal/free-cash-flow-to-equity-cal.component';

@NgModule({
  declarations: [FreeCashFlowToEquityComponent, FreeCashFlowToEquityCalComponent],
  imports: [
    CommonModule,
    FreeCashFlowToEquityRoutingModule,
    FormulaDefinitionModule
  ]
})
export class FreeCashFlowToEquityModule { }
