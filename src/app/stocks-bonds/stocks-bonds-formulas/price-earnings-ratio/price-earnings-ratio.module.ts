import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceEarningsRatioRoutingModule } from './price-earnings-ratio-routing.module';
import { PriceEarningsRatioComponent } from './price-earnings-ratio.component';
import { PriceEarningsRatioCalComponent } from './price-earnings-ratio-cal/price-earnings-ratio-cal.component';

@NgModule({
  declarations: [PriceEarningsRatioComponent, PriceEarningsRatioCalComponent],
  imports: [
    CommonModule,
    PriceEarningsRatioRoutingModule,
    FormulaDefinitionModule
  ]
})
export class PriceEarningsRatioModule { }
