import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetAssetValueComponent } from './net-asset-value.component';

const routes: Routes = [
  {
    path: '',
    component: NetAssetValueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetAssetValueRoutingModule { }
