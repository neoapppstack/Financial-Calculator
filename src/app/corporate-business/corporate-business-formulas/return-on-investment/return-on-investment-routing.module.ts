import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReturnOnInvestmentComponent } from './return-on-investment.component';

const routes: Routes = [
  {
    path: '',
    component: ReturnOnInvestmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnOnInvestmentRoutingModule { }
