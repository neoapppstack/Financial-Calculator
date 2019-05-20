import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PvOfStockWithZeroGrowthComponent } from './pv-of-stock-with-zero-growth.component';

const routes: Routes = [
  {
    path: '',
    component: PvOfStockWithZeroGrowthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PvOfStockWithZeroGrowthRoutingModule { }
