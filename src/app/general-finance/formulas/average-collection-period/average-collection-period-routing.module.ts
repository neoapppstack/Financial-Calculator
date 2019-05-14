import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AverageCollectionPeriodComponent } from './average-collection-period.component';

const routes: Routes = [
  {
    path : '',
    component: AverageCollectionPeriodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AverageCollectionPeriodRoutingModule { }
