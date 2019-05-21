import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceToBookValueRoutingModule } from './price-to-book-value-routing.module';
import { PriceToBookValueComponent } from './price-to-book-value.component';
import { PriceToBookValueCalComponent } from './price-to-book-value-cal/price-to-book-value-cal.component';

@NgModule({
  declarations: [PriceToBookValueComponent, PriceToBookValueCalComponent],
  imports: [
    CommonModule,
    PriceToBookValueRoutingModule,
    FormulaDefinationModule
  ]
})
export class PriceToBookValueModule { }
