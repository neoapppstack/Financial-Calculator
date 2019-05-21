import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetTurnoverRatioRoutingModule } from './asset-turnover-ratio-routing.module';
import { AssetTurnoverRatioComponent } from './asset-turnover-ratio.component';
import { AssetTurnoverRatioCalComponent } from './asset-turnover-ratio-cal/asset-turnover-ratio-cal.component';

@NgModule({
  declarations: [AssetTurnoverRatioComponent, AssetTurnoverRatioCalComponent],
  imports: [
    CommonModule,
    AssetTurnoverRatioRoutingModule,
    FormulaDefinationModule
  ]
})
export class AssetTurnoverRatioModule { }
