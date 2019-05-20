import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BondEquivalentYieldRoutingModule } from './bond-equivalent-yield-routing.module';
import { BondEquivalentYieldComponent } from './bond-equivalent-yield.component';
import { BondEquivalentYieldCalComponent } from './bond-equivalent-yield-cal/bond-equivalent-yield-cal.component';

@NgModule({
  declarations: [BondEquivalentYieldComponent, BondEquivalentYieldCalComponent],
  imports: [
    CommonModule,
    BondEquivalentYieldRoutingModule
  ]
})
export class BondEquivalentYieldModule { }
