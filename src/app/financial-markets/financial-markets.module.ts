import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialMarketsRoutingModule } from './financial-markets-routing.module';
import { FinancialMarketsComponent } from './financial-markets.component';
import { FormulaCardModule } from '../components/formula-card/formula-card.module';

@NgModule({
  declarations: [FinancialMarketsComponent],
  imports: [
    CommonModule,
    FinancialMarketsRoutingModule,
    FormulaCardModule
  ]
})
export class FinancialMarketsModule { }
