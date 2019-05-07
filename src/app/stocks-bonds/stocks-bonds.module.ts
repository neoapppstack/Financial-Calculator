import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksBondsRoutingModule } from './stocks-bonds-routing.module';
import { StocksBondsComponent } from './stocks-bonds.component';

@NgModule({
  declarations: [StocksBondsComponent],
  imports: [
    CommonModule,
    StocksBondsRoutingModule
  ]
})
export class StocksBondsModule { }
