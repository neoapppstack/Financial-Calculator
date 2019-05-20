import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetProfitMarginComponent } from './net-profit-margin.component';

const routes: Routes = [
  {
    path: '',
    component: NetProfitMarginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetProfitMarginRoutingModule { }
