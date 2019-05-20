import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquityMultiplierRoutingModule } from './equity-multiplier-routing.module';
import { EquityMultiplierComponent } from './equity-multiplier.component';
import { EquityMultiplierCalComponent } from './equity-multiplier-cal/equity-multiplier-cal.component';

@NgModule({
  declarations: [EquityMultiplierComponent, EquityMultiplierCalComponent],
  imports: [
    CommonModule,
    EquityMultiplierRoutingModule
  ]
})
export class EquityMultiplierModule { }
