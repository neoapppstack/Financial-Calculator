import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PvOfStockWithZeroGrowthRoutingModule } from './pv-of-stock-with-zero-growth-routing.module';
import { PvOfStockWithZeroGrowthComponent } from './pv-of-stock-with-zero-growth.component';
import { PvOfStockWithZeroGrowthCalComponent } from './pv-of-stock-with-zero-growth-cal/pv-of-stock-with-zero-growth-cal.component';

@NgModule({
  declarations: [PvOfStockWithZeroGrowthComponent, PvOfStockWithZeroGrowthCalComponent],
  imports: [
    CommonModule,
    PvOfStockWithZeroGrowthRoutingModule
  ]
})
export class PvOfStockWithZeroGrowthModule { }
