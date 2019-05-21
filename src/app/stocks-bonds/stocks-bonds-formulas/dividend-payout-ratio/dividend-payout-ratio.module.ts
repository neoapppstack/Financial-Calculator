import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividendPayoutRatioRoutingModule } from './dividend-payout-ratio-routing.module';
import { DividendPayoutRatioComponent } from './dividend-payout-ratio.component';
import { DividendPayoutRatioCalComponent } from './dividend-payout-ratio-cal/dividend-payout-ratio-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [DividendPayoutRatioComponent, DividendPayoutRatioCalComponent],
  imports: [
    CommonModule,
    DividendPayoutRatioRoutingModule,
    FormulaDefinitionModule
  ]
})
export class DividendPayoutRatioModule { }
