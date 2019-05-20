import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferredStockRoutingModule } from './preferred-stock-routing.module';
import { PreferredStockComponent } from './preferred-stock.component';
import { PreferredStockCalComponent } from './preferred-stock-cal/preferred-stock-cal.component';

@NgModule({
  declarations: [PreferredStockComponent, PreferredStockCalComponent],
  imports: [
    CommonModule,
    PreferredStockRoutingModule
  ]
})
export class PreferredStockModule { }
