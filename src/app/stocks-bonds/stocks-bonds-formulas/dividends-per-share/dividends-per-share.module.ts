import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividendsPerShareRoutingModule } from './dividends-per-share-routing.module';
import { DividendsPerShareComponent } from './dividends-per-share.component';
import { DividendsPerShareCalComponent } from './dividends-per-share-cal/dividends-per-share-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [DividendsPerShareComponent, DividendsPerShareCalComponent],
  imports: [
    CommonModule,
    DividendsPerShareRoutingModule,
    FormulaDefinitionModule
  ]
})
export class DividendsPerShareModule { }
