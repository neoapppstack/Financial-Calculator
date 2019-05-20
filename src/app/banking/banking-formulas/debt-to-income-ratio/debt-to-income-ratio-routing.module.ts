import { DebtToIncomeRatioComponent } from './debt-to-income-ratio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DebtToIncomeRatioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebtToIncomeRatioRoutingModule { }
