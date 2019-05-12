import { NoOfPeriodsOfAnnuityFromFVComponent } from './no-of-periods-of-annuity-from-fv.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NoOfPeriodsOfAnnuityFromFVComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoOfPeriodsOfAnnuityFromFVRoutingModule { }
