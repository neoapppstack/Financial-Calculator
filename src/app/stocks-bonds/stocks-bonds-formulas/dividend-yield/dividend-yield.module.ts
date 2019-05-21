import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividendYieldRoutingModule } from './dividend-yield-routing.module';
import { DividendYieldComponent } from './dividend-yield.component';
import { DividendYieldCalComponent } from './dividend-yield-cal/dividend-yield-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [DividendYieldComponent, DividendYieldCalComponent],
  imports: [
    CommonModule,
    DividendYieldRoutingModule,
    FormulaDefinitionModule
  ]
})
export class DividendYieldModule { }
