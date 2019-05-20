import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompoundInterestComponent } from './compound-interest.component';

const routes: Routes = [
  {
    path: '',
    component: CompoundInterestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompoundInterestRoutingModule { }
