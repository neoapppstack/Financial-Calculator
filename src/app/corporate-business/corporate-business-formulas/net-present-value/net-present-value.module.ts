import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetPresentValueRoutingModule } from './net-present-value-routing.module';
import { NetPresentValueComponent } from './net-present-value.component';
import { NetPresentValueCalComponent } from './net-present-value-cal/net-present-value-cal.component';

@NgModule({
  declarations: [NetPresentValueComponent, NetPresentValueCalComponent],
  imports: [
    CommonModule,
    NetPresentValueRoutingModule,
    FormulaDefinitionModule
  ]
})
export class NetPresentValueModule { }
