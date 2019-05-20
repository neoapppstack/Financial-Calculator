import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContinuousCompoundingComponent } from './continuous-compounding.component';

const routes: Routes = [
  {
    path: '',
    component: ContinuousCompoundingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContinuousCompoundingRoutingModule { }
