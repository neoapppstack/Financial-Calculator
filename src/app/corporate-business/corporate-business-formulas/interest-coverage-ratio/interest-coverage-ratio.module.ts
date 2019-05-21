import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterestCoverageRatioRoutingModule } from './interest-coverage-ratio-routing.module';
import { InterestCoverageRatioComponent } from './interest-coverage-ratio.component';
import { InterestCoverageRatioCalComponent } from './interest-coverage-ratio-cal/interest-coverage-ratio-cal.component';

@NgModule({
  declarations: [InterestCoverageRatioComponent, InterestCoverageRatioCalComponent],
  imports: [
    CommonModule,
    InterestCoverageRatioRoutingModule,
    FormulaDefinationModule
  ]
})
export class InterestCoverageRatioModule { }
