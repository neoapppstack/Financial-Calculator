import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapitalGainsYieldRoutingModule } from './capital-gains-yield-routing.module';
import { CapitalGainsYieldComponent } from './capital-gains-yield.component';
import { CapitalGainsYieldCalComponent } from './capital-gains-yield-cal/capital-gains-yield-cal.component';

@NgModule({
  declarations: [CapitalGainsYieldComponent, CapitalGainsYieldCalComponent],
  imports: [
    CommonModule,
    CapitalGainsYieldRoutingModule,
    FormulaDefinitionModule
  ]
})
export class CapitalGainsYieldModule { }
