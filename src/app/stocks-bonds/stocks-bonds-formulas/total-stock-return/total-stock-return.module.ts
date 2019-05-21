import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TotalStockReturnRoutingModule } from './total-stock-return-routing.module';
import { TotalStockReturnComponent } from './total-stock-return.component';
import { TotalStockReturnCalComponent } from './total-stock-return-cal/total-stock-return-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [TotalStockReturnComponent, TotalStockReturnCalComponent],
  imports: [
    CommonModule,
    TotalStockReturnRoutingModule,
    FormulaDefinitionModule
  ]
})
export class TotalStockReturnModule { }
