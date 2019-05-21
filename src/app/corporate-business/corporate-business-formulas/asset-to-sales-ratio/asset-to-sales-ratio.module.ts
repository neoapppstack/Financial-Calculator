import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetToSalesRatioRoutingModule } from './asset-to-sales-ratio-routing.module';
import { AssetToSalesRatioComponent } from './asset-to-sales-ratio.component';
import { AssetToSalesRatioCalComponent } from './asset-to-sales-ratio-cal/asset-to-sales-ratio-cal.component';

@NgModule({
  declarations: [AssetToSalesRatioComponent, AssetToSalesRatioCalComponent],
  imports: [
    CommonModule,
    AssetToSalesRatioRoutingModule,
    FormulaDefinationModule
  ]
})
export class AssetToSalesRatioModule { }
