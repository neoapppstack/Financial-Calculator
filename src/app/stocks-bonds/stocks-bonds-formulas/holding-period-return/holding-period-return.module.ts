import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoldingPeriodReturnRoutingModule } from './holding-period-return-routing.module';
import { HoldingPeriodReturnComponent } from './holding-period-return.component';
import { HoldingPeriodReturnCalComponent } from './holding-period-return-cal/holding-period-return-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [HoldingPeriodReturnComponent, HoldingPeriodReturnCalComponent],
  imports: [
    CommonModule,
    HoldingPeriodReturnRoutingModule,
    FormulaDefinitionModule
  ]
})
export class HoldingPeriodReturnModule { }
