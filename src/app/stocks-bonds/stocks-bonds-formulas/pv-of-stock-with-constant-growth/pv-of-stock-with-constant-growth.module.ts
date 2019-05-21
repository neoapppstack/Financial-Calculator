import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PvOfStockWithConstantGrowthRoutingModule } from './pv-of-stock-with-constant-growth-routing.module';
import { PvOfStockWithConstantGrowthComponent } from './pv-of-stock-with-constant-growth.component';
import { PvOfStockWithConstantGrowthCalComponent } from './pv-of-stock-with-constant-growth-cal/pv-of-stock-with-constant-growth-cal.component';

@NgModule({
  declarations: [PvOfStockWithConstantGrowthComponent, PvOfStockWithConstantGrowthCalComponent],
  imports: [
    CommonModule,
    PvOfStockWithConstantGrowthRoutingModule,
    FormulaDefinationModule
  ]
})
export class PvOfStockWithConstantGrowthModule { }
