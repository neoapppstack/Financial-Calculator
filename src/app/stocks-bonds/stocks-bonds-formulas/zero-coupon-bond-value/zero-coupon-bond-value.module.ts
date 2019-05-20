import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZeroCouponBondValueRoutingModule } from './zero-coupon-bond-value-routing.module';
import { ZeroCouponBondValueComponent } from './zero-coupon-bond-value.component';
import { ZeroCouponBondValueCalComponent } from './zero-coupon-bond-value-cal/zero-coupon-bond-value-cal.component';

@NgModule({
  declarations: [ZeroCouponBondValueComponent, ZeroCouponBondValueCalComponent],
  imports: [
    CommonModule,
    ZeroCouponBondValueRoutingModule
  ]
})
export class ZeroCouponBondValueModule { }
