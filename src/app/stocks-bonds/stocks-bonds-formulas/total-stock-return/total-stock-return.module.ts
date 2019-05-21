import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TotalStockReturnRoutingModule } from './total-stock-return-routing.module';
import { TotalStockReturnComponent } from './total-stock-return.component';
import { TotalStockReturnCalComponent } from './total-stock-return-cal/total-stock-return-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [TotalStockReturnComponent, TotalStockReturnCalComponent],
  imports: [
    CommonModule,
    TotalStockReturnRoutingModule,
    FormulaDefinationModule
  ]
})
export class TotalStockReturnModule { }
