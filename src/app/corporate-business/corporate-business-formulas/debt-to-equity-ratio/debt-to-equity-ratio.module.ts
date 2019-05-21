import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebtToEquityRatioRoutingModule } from './debt-to-equity-ratio-routing.module';
import { DebtToEquityRatioCalComponent } from './debt-to-equity-ratio-cal/debt-to-equity-ratio-cal.component';
import { DebtToEquityRatioComponent } from './debt-to-equity-ratio.component';

@NgModule({
  declarations: [DebtToEquityRatioCalComponent, DebtToEquityRatioComponent],
  imports: [
    CommonModule,
    DebtToEquityRatioRoutingModule,
    FormulaDefinationModule
  ]
})
export class DebtToEquityRatioModule { }
