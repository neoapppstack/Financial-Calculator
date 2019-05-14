import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolveForNumberOfPeriodsPvAndFvComponent } from './solve-for-number-of-periods-pv-and-fv.component';

const routes: Routes = [
  {
    path: '',
    component: SolveForNumberOfPeriodsPvAndFvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolveForNumberOfPeriodsPvAndFvRoutingModule { }
