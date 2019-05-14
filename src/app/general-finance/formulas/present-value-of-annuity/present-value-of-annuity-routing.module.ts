import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentValueOfAnnuityComponent } from './present-value-of-annuity.component';

const routes: Routes = [
  {
    path: '',
    component: PresentValueOfAnnuityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentValueOfAnnuityRoutingModule { }
