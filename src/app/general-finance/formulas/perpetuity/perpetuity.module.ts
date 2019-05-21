import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerpetuityRoutingModule } from './perpetuity-routing.module';
import { PerpetuityComponent } from './perpetuity.component';
import { PerpetuityCalComponent } from './perpetuity-cal/perpetuity-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [PerpetuityComponent, PerpetuityCalComponent],
  imports: [
    CommonModule,
    PerpetuityRoutingModule,
    FormulaDefinitionModule
  ]
})
export class PerpetuityModule { }
