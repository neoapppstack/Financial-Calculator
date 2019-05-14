import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoOfPeriodsOfAnnuityFromPvComponent } from './no-of-periods-of-annuity-from-pv.component';

const routes: Routes = [
  {
    path: '',
    component: NoOfPeriodsOfAnnuityFromPvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoOfPeriodsOfAnnuityFromPvRoutingModule { }
