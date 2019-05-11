import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralFinanceRoutingModule } from './general-finance-routing.module';
import { GeneralFinanceComponent } from './general-finance.component';
import { FormulaCardModule } from '../components/formula-card/formula-card.module';

@NgModule({
  declarations: [GeneralFinanceComponent],
  imports: [
    CommonModule,
    GeneralFinanceRoutingModule,
    FormulaCardModule
  ]
})
export class GeneralFinanceModule { }
