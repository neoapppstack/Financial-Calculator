import { AnnualPercentageYieldComponent } from './annual-percentage-yield.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AnnualPercentageYieldComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnualPercentageYieldRoutingModule { }
