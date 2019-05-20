import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaxEquivalentYieldComponent } from './tax-equivalent-yield.component';

const routes: Routes = [
  {
    path: '',
    component: TaxEquivalentYieldComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxEquivalentYieldRoutingModule { }
