import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetWorkingCapitalRoutingModule } from './net-working-capital-routing.module';
import { NetWorkingCapitalComponent } from './net-working-capital.component';
import { NetWorkingCapitalCalComponent } from './net-working-capital-cal/net-working-capital-cal.component';

@NgModule({
  declarations: [NetWorkingCapitalComponent, NetWorkingCapitalCalComponent],
  imports: [
    CommonModule,
    NetWorkingCapitalRoutingModule,
    FormulaDefinitionModule
  ]
})
export class NetWorkingCapitalModule { }
