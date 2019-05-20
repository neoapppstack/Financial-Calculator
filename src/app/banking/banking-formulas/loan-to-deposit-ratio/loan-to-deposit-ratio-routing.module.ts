import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanToDepositRatioComponent } from './loan-to-deposit-ratio.component';

const routes: Routes = [
  {
    path: '',
    component: LoanToDepositRatioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanToDepositRatioRoutingModule { }
