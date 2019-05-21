import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxEquivalentYieldRoutingModule } from './tax-equivalent-yield-routing.module';
import { TaxEquivalentYieldComponent } from './tax-equivalent-yield.component';
import { TaxEquivalentYieldCalComponent } from './tax-equivalent-yield-cal/tax-equivalent-yield-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [TaxEquivalentYieldComponent, TaxEquivalentYieldCalComponent],
  imports: [
    CommonModule,
    TaxEquivalentYieldRoutingModule,
    FormulaDefinationModule
  ]
})
export class TaxEquivalentYieldModule { }
