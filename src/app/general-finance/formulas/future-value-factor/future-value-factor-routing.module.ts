import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FutureValueFactorComponent } from './future-value-factor.component';

const routes: Routes = [
  {
    path: '',
    component: FutureValueFactorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FutureValueFactorRoutingModule { }
