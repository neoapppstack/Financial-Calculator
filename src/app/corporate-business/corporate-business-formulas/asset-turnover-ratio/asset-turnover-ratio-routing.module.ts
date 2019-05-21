import { AssetTurnoverRatioComponent } from './asset-turnover-ratio.component';
import { AssetToSalesRatioComponent } from './../asset-to-sales-ratio/asset-to-sales-ratio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AssetTurnoverRatioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetTurnoverRatioRoutingModule { }
