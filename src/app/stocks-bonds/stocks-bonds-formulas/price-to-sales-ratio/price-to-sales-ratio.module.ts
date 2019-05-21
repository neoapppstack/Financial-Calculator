import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceToSalesRatioRoutingModule } from './price-to-sales-ratio-routing.module';
import { PriceToSalesRatioComponent } from './price-to-sales-ratio.component';
import { PriceToSalesRatioCalComponent } from './price-to-sales-ratio-cal/price-to-sales-ratio-cal.component';

@NgModule({
  declarations: [PriceToSalesRatioComponent, PriceToSalesRatioCalComponent],
  imports: [
    CommonModule,
    PriceToSalesRatioRoutingModule,
    FormulaDefinitionModule
  ]
})
export class PriceToSalesRatioModule { }
