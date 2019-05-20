import { ZeroCouponBondEffectiveYieldComponent } from './zero-coupon-bond-effective-yield.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ZeroCouponBondEffectiveYieldComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZeroCouponBondEffectiveYieldRoutingModule { }
