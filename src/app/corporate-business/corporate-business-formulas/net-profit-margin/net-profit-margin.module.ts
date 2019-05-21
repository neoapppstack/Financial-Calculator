import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
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
    FormulaDefinationModule
  ]
})
export class NetProfitMarginModule { }
