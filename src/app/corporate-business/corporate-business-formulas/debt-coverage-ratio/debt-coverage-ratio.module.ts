import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebtCoverageRatioComponent } from './debt-coverage-ratio.component';
import { DebtCoverageRatioCalComponent } from './debt-coverage-ratio-cal/debt-coverage-ratio-cal.component';

@NgModule({
  declarations: [DebtCoverageRatioComponent, DebtCoverageRatioCalComponent],
  imports: [
    CommonModule,
    FormulaDefinationModule
  ]
})
export class DebtCoverageRatioModule { }
