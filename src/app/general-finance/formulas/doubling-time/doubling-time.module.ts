import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoublingTimeRoutingModule } from './doubling-time-routing.module';
import { DoublingTimeComponent } from './doubling-time.component';
import { DoublingTimeCalComponent } from './doubling-time-cal/doubling-time-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [DoublingTimeComponent, DoublingTimeCalComponent],
  imports: [
    CommonModule,
    DoublingTimeRoutingModule,
    FormulaDefinationModule
  ]
})
export class DoublingTimeModule { }
