import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetAssetValueRoutingModule } from './net-asset-value-routing.module';
import { NetAssetValueComponent } from './net-asset-value.component';
import { NetAssetValueCalComponent } from './net-asset-value-cal/net-asset-value-cal.component';

@NgModule({
  declarations: [NetAssetValueComponent, NetAssetValueCalComponent],
  imports: [
    CommonModule,
    NetAssetValueRoutingModule,
    FormulaDefinationModule
  ]
})
export class NetAssetValueModule { }
