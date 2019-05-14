import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentValueOfGrowingAnnuityComponent } from './present-value-of-growing-annuity.component';

const routes: Routes = [
  {
    path: '',
    component: PresentValueOfGrowingAnnuityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentValueOfGrowingAnnuityRoutingModule { }
