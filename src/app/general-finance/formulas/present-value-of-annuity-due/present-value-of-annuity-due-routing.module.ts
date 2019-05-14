import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentValueOfAnnuityDueComponent } from './present-value-of-annuity-due.component';

const routes: Routes = [
  {
    path: '',
    component: PresentValueOfAnnuityDueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentValueOfAnnuityDueRoutingModule { }
