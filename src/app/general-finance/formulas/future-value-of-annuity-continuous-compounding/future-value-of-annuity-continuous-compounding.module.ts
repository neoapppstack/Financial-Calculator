import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { FutureValueOfAnnuityContinuousRoutingModule } from './future-value-of-annuity-continuous-compounding-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FutureValueOfAnnuityContinuousCompoundingComponent } from './future-value-of-annuity-continuous-compounding.component';
import { FutureValueOfAnnuityContinuousCompoundingCalComponent } from './future-value-of-annuity-continuous-compounding-cal/future-value-of-annuity-continuous-compounding-cal.component';
@NgModule({
  declarations: [FutureValueOfAnnuityContinuousCompoundingComponent,
    FutureValueOfAnnuityContinuousCompoundingCalComponent],
  imports: [
    CommonModule,
    FutureValueOfAnnuityContinuousRoutingModule,
    FormulaDefinationModule
  ]
})
export class FutureValueOfAnnuityContinuousCompoundingModule { }
