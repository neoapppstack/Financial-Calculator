import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoublingTimeSimpleInterestComponent } from './doubling-time-simple-interest.component';

const routes: Routes = [
  {
    path: '',
    component: DoublingTimeSimpleInterestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoublingTimeSimpleInterestRoutingModule { }
