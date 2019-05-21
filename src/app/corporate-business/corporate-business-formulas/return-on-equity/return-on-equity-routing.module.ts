import { ReturnOnAssetsComponent } from './../return-on-assets/return-on-assets.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReturnOnEquityComponent } from './return-on-equity.component';

const routes: Routes = [
  {
    path: '',
    component: ReturnOnEquityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnOnEquityRoutingModule { }
