import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetWorkingCapitalComponent } from './net-working-capital.component';

const routes: Routes = [
  {
    path: '',
    component: NetWorkingCapitalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetWorkingCapitalRoutingModule { }
