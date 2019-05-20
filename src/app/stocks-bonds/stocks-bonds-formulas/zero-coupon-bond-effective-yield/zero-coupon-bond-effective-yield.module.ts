import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZeroCouponBondEffectiveYieldRoutingModule } from './zero-coupon-bond-effective-yield-routing.module';
import { ZeroCouponBondEffectiveYieldComponent } from './zero-coupon-bond-effective-yield.component';
import { ZeroCouponBondEffectiveYieldCalComponent } from './zero-coupon-bond-effective-yield-cal/zero-coupon-bond-effective-yield-cal.component';

@NgModule({
  declarations: [ZeroCouponBondEffectiveYieldComponent, ZeroCouponBondEffectiveYieldCalComponent],
  imports: [
    CommonModule,
    ZeroCouponBondEffectiveYieldRoutingModule
  ]
})
export class ZeroCouponBondEffectiveYieldModule { }
