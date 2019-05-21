import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FutureValueRoutingModule } from './future-value-routing.module';
import { FutureValueComponent } from './future-value.component';
import { FutureValueCalComponent } from './future-value-cal/future-value-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [FutureValueComponent, FutureValueCalComponent],
  imports: [
    CommonModule,
    FutureValueRoutingModule,
    FormulaDefinitionModule
  ]
})
export class FutureValueModule { }
