import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebtRatioRoutingModule } from './debt-ratio-routing.module';
import { DebtRatioComponent } from './debt-ratio.component';
import { DebtRatioCalComponent } from './debt-ratio-cal/debt-ratio-cal.component';

@NgModule({
  declarations: [DebtRatioComponent, DebtRatioCalComponent],
  imports: [
    CommonModule,
    DebtRatioRoutingModule,
    FormulaDefinitionModule
  ]
})
export class DebtRatioModule { }
