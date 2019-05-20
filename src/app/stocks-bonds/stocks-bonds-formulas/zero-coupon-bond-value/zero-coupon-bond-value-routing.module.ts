import { ZeroCouponBondValueComponent } from './zero-coupon-bond-value.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ZeroCouponBondValueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZeroCouponBondValueRoutingModule { }
