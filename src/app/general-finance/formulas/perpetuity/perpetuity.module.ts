import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerpetuityRoutingModule } from './perpetuity-routing.module';
import { PerpetuityComponent } from './perpetuity.component';
import { PerpetuityCalComponent } from './perpetuity-cal/perpetuity-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [PerpetuityComponent, PerpetuityCalComponent],
  imports: [
    CommonModule,
    PerpetuityRoutingModule,
    FormulaDefinationModule
  ]
})
export class PerpetuityModule { }
