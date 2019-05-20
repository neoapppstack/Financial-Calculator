import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanToValueRatioComponent } from './loan-to-value-ratio.component';

const routes: Routes = [
  {
    path: '',
    component: LoanToValueRatioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanToValueRatioRoutingModule { }
