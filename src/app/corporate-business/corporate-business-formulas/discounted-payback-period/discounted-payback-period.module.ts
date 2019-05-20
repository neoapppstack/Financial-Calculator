import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscountedPaybackPeriodRoutingModule } from './discounted-payback-period-routing.module';
import { DiscountedPaybackPeriodComponent } from './discounted-payback-period.component';
import { DiscountedPaybackPeriodCalComponent } from './discounted-payback-period-cal/discounted-payback-period-cal.component';

@NgModule({
  declarations: [DiscountedPaybackPeriodComponent, DiscountedPaybackPeriodCalComponent],
  imports: [
    CommonModule,
    DiscountedPaybackPeriodRoutingModule
  ]
})
export class DiscountedPaybackPeriodModule { }
