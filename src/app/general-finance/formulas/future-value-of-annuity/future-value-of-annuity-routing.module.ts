import { FutureValueOfAnnuityComponent } from './future-value-of-annuity.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FutureValueOfAnnuityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FutureValueOfAnnuityRoutingModule { }
