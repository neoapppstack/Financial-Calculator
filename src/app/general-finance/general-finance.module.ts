import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralFinanceRoutingModule } from './general-finance-routing.module';
import { GeneralFinanceComponent } from './general-finance.component';

@NgModule({
  declarations: [GeneralFinanceComponent],
  imports: [
    CommonModule,
    GeneralFinanceRoutingModule
  ]
})
export class GeneralFinanceModule { }
