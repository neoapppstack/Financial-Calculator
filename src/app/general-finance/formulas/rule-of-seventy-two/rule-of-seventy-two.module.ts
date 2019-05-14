import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RuleOfSeventyTwoRoutingModule } from './rule-of-seventy-two-routing.module';
import { RuleOfSeventyTwoComponent } from './rule-of-seventy-two.component';
import { RuleOfSeventyTwoCalComponent } from './rule-of-seventy-two-cal/rule-of-seventy-two-cal.component';

@NgModule({
  declarations: [RuleOfSeventyTwoComponent, RuleOfSeventyTwoCalComponent],
  imports: [
    CommonModule,
    RuleOfSeventyTwoRoutingModule,
    FormulaDefinationModule
  ]
})
export class RuleOfSeventyTwoModule { }
