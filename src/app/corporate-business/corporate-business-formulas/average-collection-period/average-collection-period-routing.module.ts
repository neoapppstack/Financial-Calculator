import { AverageCollectionPeriodComponent } from './average-collection-period.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AverageCollectionPeriodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AverageCollectionPeriodRoutingModule { }
