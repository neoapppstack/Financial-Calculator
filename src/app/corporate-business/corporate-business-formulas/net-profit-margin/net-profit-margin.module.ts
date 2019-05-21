import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetProfitMarginRoutingModule } from './net-profit-margin-routing.module';
import { NetProfitMarginComponent } from './net-profit-margin.component';
import { NetProfitMarginCalComponent } from './net-profit-margin-cal/net-profit-margin-cal.component';

@NgModule({
  declarations: [NetProfitMarginComponent, NetProfitMarginCalComponent],
  imports: [
    CommonModule,
    NetProfitMarginRoutingModule,
    FormulaDefinitionModule
  ]
})
export class NetProfitMarginModule { }
