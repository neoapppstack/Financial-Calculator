import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceToSalesRatioComponent } from './price-to-sales-ratio.component';

const routes: Routes = [
  {
    path: '',
    component: PriceToSalesRatioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceToSalesRatioRoutingModule { }
