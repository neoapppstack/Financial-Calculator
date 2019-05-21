import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstimatedEarningsRoutingModule } from './estimated-earnings-routing.module';
import { EstimatedEarningsComponent } from './estimated-earnings.component';
import { EstimatedEarningsCalComponent } from './estimated-earnings-cal/estimated-earnings-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [EstimatedEarningsComponent, EstimatedEarningsCalComponent],
  imports: [
    CommonModule,
    EstimatedEarningsRoutingModule,
    FormulaDefinationModule
  ]
})
export class EstimatedEarningsModule { }
