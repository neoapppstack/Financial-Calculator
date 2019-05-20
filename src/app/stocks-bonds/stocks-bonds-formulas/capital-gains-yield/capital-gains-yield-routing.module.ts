import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapitalGainsYieldComponent } from './capital-gains-yield.component';

const routes: Routes = [
  {
    path: '',
    component: CapitalGainsYieldComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapitalGainsYieldRoutingModule { }
