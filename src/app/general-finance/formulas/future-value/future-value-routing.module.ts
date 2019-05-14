import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FutureValueComponent } from './future-value.component';

const routes: Routes = [
  {
    path: '',
    component: FutureValueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FutureValueRoutingModule { }
