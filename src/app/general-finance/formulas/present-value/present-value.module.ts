import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentValueRoutingModule } from './present-value-routing.module';
import { PresentValueComponent } from './present-value.component';
import { PresentValueCalComponent } from './present-value-cal/present-value-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [PresentValueComponent, PresentValueCalComponent],
  imports: [
    CommonModule,
    PresentValueRoutingModule,
    FormulaDefinitionModule
  ]
})
export class PresentValueModule { }
