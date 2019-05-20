import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemainingBalanceFormulaComponent } from './remaining-balance-formula.component';

const routes: Routes = [
  {
    path: '',
    component: RemainingBalanceFormulaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemainingBalanceFormulaRoutingModule { }
