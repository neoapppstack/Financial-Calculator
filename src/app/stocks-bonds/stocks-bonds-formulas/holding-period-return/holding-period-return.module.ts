import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoldingPeriodReturnRoutingModule } from './holding-period-return-routing.module';
import { HoldingPeriodReturnComponent } from './holding-period-return.component';
import { HoldingPeriodReturnCalComponent } from './holding-period-return-cal/holding-period-return-cal.component';

@NgModule({
  declarations: [HoldingPeriodReturnComponent, HoldingPeriodReturnCalComponent],
  imports: [
    CommonModule,
    HoldingPeriodReturnRoutingModule
  ]
})
export class HoldingPeriodReturnModule { }
