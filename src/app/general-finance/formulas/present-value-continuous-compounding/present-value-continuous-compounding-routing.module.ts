import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentValueContinuousCompoundingComponent } from './present-value-continuous-compounding.component';

const routes: Routes = [
  {
    path: '',
    component: PresentValueContinuousCompoundingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentValueContinuousCompoundingRoutingModule { }
