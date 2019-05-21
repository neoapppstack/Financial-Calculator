import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarningsPerShareRoutingModule } from './earnings-per-share-routing.module';
import { EarningsPerShareComponent } from './earnings-per-share.component';
import { EarningsPerShareCalComponent } from './earnings-per-share-cal/earnings-per-share-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [EarningsPerShareComponent, EarningsPerShareCalComponent],
  imports: [
    CommonModule,
    EarningsPerShareRoutingModule,
    FormulaDefinationModule
  ]
})
export class EarningsPerShareModule { }
