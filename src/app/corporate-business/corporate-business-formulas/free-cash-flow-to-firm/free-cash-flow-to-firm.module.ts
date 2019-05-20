import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreeCashFlowToFirmRoutingModule } from './free-cash-flow-to-firm-routing.module';
import { FreeCashFlowToFirmComponent } from './free-cash-flow-to-firm.component';
import { FreeCashFlowToFirmCalComponent } from './free-cash-flow-to-firm-cal/free-cash-flow-to-firm-cal.component';

@NgModule({
  declarations: [FreeCashFlowToFirmComponent, FreeCashFlowToFirmCalComponent],
  imports: [
    CommonModule,
    FreeCashFlowToFirmRoutingModule
  ]
})
export class FreeCashFlowToFirmModule { }
