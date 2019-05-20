import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BondEquivalentYieldComponent } from './bond-equivalent-yield.component';

const routes: Routes = [
  {
    path: '',
    component: BondEquivalentYieldComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BondEquivalentYieldRoutingModule { }
