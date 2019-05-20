import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceEarningsRatioComponent } from './price-earnings-ratio.component';

const routes: Routes = [
  {
    path: '',
    component: PriceEarningsRatioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceEarningsRatioRoutingModule { }
