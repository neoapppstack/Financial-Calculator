import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentValueRoutingModule } from './present-value-routing.module';
import { PresentValueComponent } from './present-value.component';
import { PresentValueCalComponent } from './present-value-cal/present-value-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [PresentValueComponent, PresentValueCalComponent],
  imports: [
    CommonModule,
    PresentValueRoutingModule,
    FormulaDefinationModule
  ]
})
export class PresentValueModule { }
