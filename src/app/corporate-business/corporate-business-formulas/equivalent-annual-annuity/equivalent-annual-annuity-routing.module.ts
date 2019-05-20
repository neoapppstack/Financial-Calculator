import { EquivalentAnnualAnnuityComponent } from './equivalent-annual-annuity.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EquivalentAnnualAnnuityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquivalentAnnualAnnuityRoutingModule { }
