import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebtToIncomeRatioRoutingModule } from './debt-to-income-ratio-routing.module';
import { DebtToIncomeRatioComponent } from './debt-to-income-ratio.component';
import { DebtToIncomeRatioCalComponent } from './debt-to-income-ratio-cal/debt-to-income-ratio-cal.component';

@NgModule({
  declarations: [DebtToIncomeRatioComponent, DebtToIncomeRatioCalComponent],
  imports: [
    CommonModule,
    DebtToIncomeRatioRoutingModule
  ]
})
export class DebtToIncomeRatioModule { }
