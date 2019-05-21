import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentValueFactorRoutingModule } from './present-value-factor-routing.module';
import { PresentValueFactorComponent } from './present-value-factor.component';
import { PresentValueFactorCalComponent } from './present-value-factor-cal/present-value-factor-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [PresentValueFactorComponent, PresentValueFactorCalComponent],
  imports: [
    CommonModule,
    PresentValueFactorRoutingModule,
    FormulaDefinitionModule
  ]
})
export class PresentValueFactorModule { }
