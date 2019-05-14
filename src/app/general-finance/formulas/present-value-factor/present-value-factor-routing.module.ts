import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentValueFactorComponent } from './present-value-factor.component';

const routes: Routes = [
  {
    path: '',
    component: PresentValueFactorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentValueFactorRoutingModule { }
