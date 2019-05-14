import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FutureValueContinuousCompoundingComponent } from './future-value-continuous-compounding.component';

const routes: Routes = [
  {
    path: '',
    component: FutureValueContinuousCompoundingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FutureValueContinuousCompoundingRoutingModule { }
