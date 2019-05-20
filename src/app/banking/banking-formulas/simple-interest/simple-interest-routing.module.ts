import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleInterestComponent } from './simple-interest.component';

const routes: Routes = [
  {
    path: '',
    component: SimpleInterestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleInterestRoutingModule { }
