import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetPresentValueComponent } from './net-present-value.component';

const routes: Routes = [
  {
    path: '',
    component: NetPresentValueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetPresentValueRoutingModule { }
