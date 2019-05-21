import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarningsPerShareRoutingModule } from './earnings-per-share-routing.module';
import { EarningsPerShareComponent } from './earnings-per-share.component';
import { EarningsPerShareCalComponent } from './earnings-per-share-cal/earnings-per-share-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [EarningsPerShareComponent, EarningsPerShareCalComponent],
  imports: [
    CommonModule,
    EarningsPerShareRoutingModule,
    FormulaDefinitionModule
  ]
})
export class EarningsPerShareModule { }
