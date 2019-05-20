import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanBalloonBalanceComponent } from './loan-balloon-balance.component';

const routes: Routes = [
  {
    path: '',
    component: LoanBalloonBalanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanBalloonBalanceRoutingModule { }
