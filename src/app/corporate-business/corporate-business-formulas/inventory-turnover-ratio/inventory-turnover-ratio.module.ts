import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
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
    FormulaDefinitionModule
  ]
})
export class InventoryTurnoverRatioModule { }
