import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PvOfStockWithConstantGrowthComponent } from './pv-of-stock-with-constant-growth.component';

const routes: Routes = [
  {
    path: '',
    component: PvOfStockWithConstantGrowthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PvOfStockWithConstantGrowthRoutingModule { }
