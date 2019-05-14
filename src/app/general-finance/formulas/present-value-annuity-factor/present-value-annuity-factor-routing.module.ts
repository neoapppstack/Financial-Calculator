import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentValueAnnuityFactorComponent } from './present-value-annuity-factor.component';

const routes: Routes = [
  {
    path: '',
    component: PresentValueAnnuityFactorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentValueAnnuityFactorRoutingModule { }
