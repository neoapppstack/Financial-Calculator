import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FreeCashFlowToEquityComponent } from './free-cash-flow-to-equity.component';

const routes: Routes = [
  {
    path: '',
    component: FreeCashFlowToEquityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreeCashFlowToEquityRoutingModule { }
