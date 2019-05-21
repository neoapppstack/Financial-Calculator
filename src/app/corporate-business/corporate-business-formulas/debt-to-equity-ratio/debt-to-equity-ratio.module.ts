import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
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
    FormulaDefinitionModule
  ]
})
export class DebtToEquityRatioModule { }
