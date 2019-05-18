import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksBondsRoutingModule } from './stocks-bonds-routing.module';
import { StocksBondsComponent } from './stocks-bonds.component';
import { FormulaCardModule } from '../components/formula-card/formula-card.module';

@NgModule({
  declarations: [StocksBondsComponent],
  imports: [
    CommonModule,
    StocksBondsRoutingModule,
    FormulaCardModule
  ]
})
export class StocksBondsModule { }
