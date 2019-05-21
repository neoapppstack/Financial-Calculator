import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoublingTimeSimpleInterestRoutingModule } from './doubling-time-simple-interest-routing.module';
import { DoublingTimeSimpleInterestComponent } from './doubling-time-simple-interest.component';
import { DoublingTimeSimpleInterestCalComponent } from './doubling-time-simple-interest-cal/doubling-time-simple-interest-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [DoublingTimeSimpleInterestComponent, DoublingTimeSimpleInterestCalComponent],
  imports: [
    CommonModule,
    DoublingTimeSimpleInterestRoutingModule,
    FormulaDefinitionModule
  ]
})
export class DoublingTimeSimpleInterestModule { }
