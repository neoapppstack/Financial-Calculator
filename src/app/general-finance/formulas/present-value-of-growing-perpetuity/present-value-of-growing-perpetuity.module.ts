import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentValueOfGrowingPerpetuityRoutingModule } from './present-value-of-growing-perpetuity-routing.module';
import { PresentValueOfGrowingPerpetuityComponent } from './present-value-of-growing-perpetuity.component';
import { PresentValueOfGrowingPerpetuityCalComponent } from './present-value-of-growing-perpetuity-cal/present-value-of-growing-perpetuity-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [PresentValueOfGrowingPerpetuityComponent, PresentValueOfGrowingPerpetuityCalComponent],
  imports: [
    CommonModule,
    PresentValueOfGrowingPerpetuityRoutingModule,
    FormulaDefinationModule
  ]
})
export class PresentValueOfGrowingPerpetuityModule { }
