import { FutureValueOfAnnuityContinuousCompoundingComponent } from './future-value-of-annuity-continuous-compounding.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FutureValueOfAnnuityContinuousCompoundingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FutureValueOfAnnuityContinuousRoutingModule { }
