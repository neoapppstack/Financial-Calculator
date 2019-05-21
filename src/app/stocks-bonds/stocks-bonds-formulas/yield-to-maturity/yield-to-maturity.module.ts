import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YieldToMaturityRoutingModule } from './yield-to-maturity-routing.module';
import { YieldToMaturityComponent } from './yield-to-maturity.component';
import { YieldToMaturityCalComponent } from './yield-to-maturity-cal/yield-to-maturity-cal.component';

@NgModule({
  declarations: [YieldToMaturityComponent, YieldToMaturityCalComponent],
  imports: [
    CommonModule,
    YieldToMaturityRoutingModule,
    FormulaDefinitionModule
  ]
})
export class YieldToMaturityModule { }
