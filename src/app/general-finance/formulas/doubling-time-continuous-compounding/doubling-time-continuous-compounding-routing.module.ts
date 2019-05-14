import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoublingTimeContinuousCompoundingComponent } from './doubling-time-continuous-compounding.component';

const routes: Routes = [
  {
    path: '',
    component: DoublingTimeContinuousCompoundingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoublingTimeContinuousCompoundingRoutingModule { }
