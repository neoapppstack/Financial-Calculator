import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialMarketsRoutingModule } from './financial-markets-routing.module';
import { FinancialMarketsComponent } from './financial-markets.component';

@NgModule({
  declarations: [FinancialMarketsComponent],
  imports: [
    CommonModule,
    FinancialMarketsRoutingModule
  ]
})
export class FinancialMarketsModule { }
