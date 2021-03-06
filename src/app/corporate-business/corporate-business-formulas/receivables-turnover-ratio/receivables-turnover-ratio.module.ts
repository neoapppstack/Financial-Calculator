import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceivablesTurnoverRatioRoutingModule } from './receivables-turnover-ratio-routing.module';
import { ReceivablesTurnoverRatioComponent } from './receivables-turnover-ratio.component';
import { ReceivablesTurnoverRatioCalComponent } from './receivables-turnover-ratio-cal/receivables-turnover-ratio-cal.component';

@NgModule({
  declarations: [ReceivablesTurnoverRatioComponent, ReceivablesTurnoverRatioCalComponent],
  imports: [
    CommonModule,
    ReceivablesTurnoverRatioRoutingModule,
    FormulaDefinitionModule
  ]
})
export class ReceivablesTurnoverRatioModule { }
