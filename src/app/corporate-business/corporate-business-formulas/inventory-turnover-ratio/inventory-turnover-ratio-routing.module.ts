import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryTurnoverRatioComponent } from './inventory-turnover-ratio.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryTurnoverRatioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryTurnoverRatioRoutingModule { }
