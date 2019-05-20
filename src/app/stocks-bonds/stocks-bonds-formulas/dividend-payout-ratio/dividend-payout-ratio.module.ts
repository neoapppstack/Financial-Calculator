import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividendPayoutRatioRoutingModule } from './dividend-payout-ratio-routing.module';
import { DividendPayoutRatioComponent } from './dividend-payout-ratio.component';
import { DividendPayoutRatioCalComponent } from './dividend-payout-ratio-cal/dividend-payout-ratio-cal.component';

@NgModule({
  declarations: [DividendPayoutRatioComponent, DividendPayoutRatioCalComponent],
  imports: [
    CommonModule,
    DividendPayoutRatioRoutingModule
  ]
})
export class DividendPayoutRatioModule { }
