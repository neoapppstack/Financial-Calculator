import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstimatedEarningsRoutingModule } from './estimated-earnings-routing.module';
import { EstimatedEarningsComponent } from './estimated-earnings.component';
import { EstimatedEarningsCalComponent } from './estimated-earnings-cal/estimated-earnings-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [EstimatedEarningsComponent, EstimatedEarningsCalComponent],
  imports: [
    CommonModule,
    EstimatedEarningsRoutingModule,
    FormulaDefinitionModule
  ]
})
export class EstimatedEarningsModule { }
