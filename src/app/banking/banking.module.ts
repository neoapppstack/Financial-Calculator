import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankingRoutingModule } from './banking-routing.module';
import { BankingComponent } from './banking.component';
import { FormulaCardModule } from '../components/formula-card/formula-card.module';

@NgModule({
  declarations: [BankingComponent],
  imports: [
    CommonModule,
    BankingRoutingModule,
    FormulaCardModule
  ]
})
export class BankingModule { }
