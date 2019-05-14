import { FutureValueOfAnnuityDueComponent } from './future-value-of-annuity-due.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FutureValueOfAnnuityDueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FutureValueOfAnnuityDueRoutingModule { }
