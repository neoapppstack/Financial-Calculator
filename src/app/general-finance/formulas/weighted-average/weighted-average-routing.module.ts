import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeightedAverageComponent } from './weighted-average.component';

const routes: Routes = [
  {
    path: '',
    component: WeightedAverageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeightedAverageRoutingModule { }
