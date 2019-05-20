import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividendYieldRoutingModule } from './dividend-yield-routing.module';
import { DividendYieldComponent } from './dividend-yield.component';
import { DividendYieldCalComponent } from './dividend-yield-cal/dividend-yield-cal.component';

@NgModule({
  declarations: [DividendYieldComponent, DividendYieldCalComponent],
  imports: [
    CommonModule,
    DividendYieldRoutingModule
  ]
})
export class DividendYieldModule { }
