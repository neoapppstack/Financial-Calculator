import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryTurnoverRatioRoutingModule } from './inventory-turnover-ratio-routing.module';
import { InventoryTurnoverRatioComponent } from './inventory-turnover-ratio.component';
import { InventoryTurnoverRatioCalComponent } from './inventory-turnover-ratio-cal/inventory-turnover-ratio-cal.component';

@NgModule({
  declarations: [InventoryTurnoverRatioComponent, InventoryTurnoverRatioCalComponent],
  imports: [
    CommonModule,
    InventoryTurnoverRatioRoutingModule,
    FormulaDefinationModule
  ]
})
export class InventoryTurnoverRatioModule { }
