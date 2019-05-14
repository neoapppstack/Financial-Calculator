import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FutureValueOfGrowingAnnuityComponent } from './future-value-of-growing-annuity.component';

const routes: Routes = [
  {
    path: '',
    component: FutureValueOfGrowingAnnuityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FutureValueOfGrowingAnnuityRoutingModule { }
