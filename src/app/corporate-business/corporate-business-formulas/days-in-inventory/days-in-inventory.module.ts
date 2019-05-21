import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaysInInventoryRoutingModule } from './days-in-inventory-routing.module';
import { DaysInInventoryComponent } from './days-in-inventory.component';
import { DaysInInventoryCalComponent } from './days-in-inventory-cal/days-in-inventory-cal.component';

@NgModule({
  declarations: [DaysInInventoryComponent, DaysInInventoryCalComponent],
  imports: [
    CommonModule,
    DaysInInventoryRoutingModule,
    FormulaDefinitionModule
  ]
})
export class DaysInInventoryModule { }
