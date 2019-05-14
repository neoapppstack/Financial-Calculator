import { GeneralFinanceComponent } from './general-finance.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GeneralFinanceComponent
  },
  {
    path: 'future-value-of-annuity',
    loadChildren: `./formulas/future-value-of-annuity/future-value-of-annuity.module#FutureValueOfAnnuityModule`,
  },
  {
    path: 'future-value-of-annuity-continuous-compounding',
    loadChildren: `./formulas/future-value-of-annuity-continuous-compounding/future-value-of-annuity-continuous-compounding.module#FutureValueOfAnnuityContinuousCompoundingModule`,
  },
  {
    path: 'number-of-periods-of-annuity-from-fv',
    loadChildren: `./formulas/no-of-periods-of-annuity-from-fv/no-of-periods-of-annuity-from-fv.module#NoOfPeriodsOfAnnuityFromFVModule`
  },
  {
    path: 'annuity-payment-formula',
    loadChildren: `./formulas/annuity-payment-formula/annuity-payment-formula.module#AnnuityPaymentFormulaModule`
  },
  {
    path: 'annuity-payment-from-future-value',
    loadChildren: `./formulas/annuity-payment-from-future-value/annuity-payment-from-future-value.module#AnnuityPaymentFromFutureValueModule`
  },
  {
    path: 'no-of-periods-of-annuity-from-pv',
    loadChildren: './formulas/no-of-periods-of-annuity-from-pv/no-of-periods-of-annuity-from-pv.module#NoOfPeriodsOfAnnuityFromPvModule'
  },
  {
    path: 'present-value-of-annuity',
    loadChildren: './formulas/present-value-of-annuity/present-value-of-annuity.module#PresentValueOfAnnuityModule'
  },
  {
    path: 'average-collection-period',
    loadChildren: './formulas/average-collection-period/average-collection-period.module#AverageCollectionPeriodModule'
  },
  {
    path: 'present-value-annuity-factor',
    loadChildren: './formulas/present-value-annuity-factor/present-value-annuity-factor.module#PresentValueAnnuityFactorModule'
  },
  {
    path: 'present-value-of-annuity-due',
    loadChildren: './formulas/present-value-of-annuity-due/present-value-of-annuity-due.module#PresentValueOfAnnuityDueModule'
  },
  {
    path: 'future-value-of-annuity-due',
    loadChildren: './formulas/future-value-of-annuity-due/future-value-of-annuity-due.module#FutureValueOfAnnuityDueModule'
  },
  {
    path: 'annuity-due-payment-fv',
    loadChildren: './formulas/annuity-due-payment-fv/annuity-due-payment-fv.module#AnnuityDuePaymentFvModule'
  },
  {
    path: 'annuity-due-payment-pv',
    loadChildren: './formulas/annuity-due-payment-pv/annuity-due-payment-pv.module#AnnuityDuePaymentPvModule'
  },
  {
    path: 'doubling-time',
    loadChildren: './formulas/doubling-time/doubling-time.module#DoublingTimeModule'
  },
  {
    path: 'doubling-time-continuous-compounding',
    loadChildren: './formulas/doubling-time-continuous-compounding/doubling-time-continuous-compounding.module#DoublingTimeContinuousCompoundingModule'
  },
  {
    path: 'doubling-time-simple-interest',
    loadChildren: './formulas/doubling-time-simple-interest/doubling-time-simple-interest.module#DoublingTimeSimpleInterestModule'
  },
  {
    path: 'future-value',
    loadChildren: './formulas/future-value/future-value.module#FutureValueModule'
  },
  {
    path: 'future-value-continuous-compounding',
    loadChildren: './formulas/future-value-continuous-compounding/future-value-continuous-compounding.module#FutureValueContinuousCompoundingModule'
  },
  {
    path: 'future-value-factor',
    loadChildren: './formulas/future-value-factor/future-value-factor.module#FutureValueFactorModule'
  },
  {
    path: 'future-value-of-growing-annuity',
    loadChildren: './formulas/future-value-of-growing-annuity/future-value-of-growing-annuity.module#FutureValueOfGrowingAnnuityModule'
  },
  {
    path: 'growing-annuity-payment',
    loadChildren: './formulas/growing-annuity-payment/growing-annuity-payment.module#GrowingAnnuityPaymentModule'
  },
  {
    path: 'growing-annuity-payment-from-future-value',
    loadChildren: './formulas/growing-annuity-payment-from-future-value/growing-annuity-payment-from-future-value.module#GrowingAnnuityPaymentFromFutureValueModule'
  },
  {
    path: 'present-value-of-growing-annuity',
    loadChildren: './formulas/present-value-of-growing-annuity/present-value-of-growing-annuity.module#PresentValueOfGrowingAnnuityModule'
  },
  {
    path: 'present-value-of-growing-perpetuity',
    loadChildren: './formulas/present-value-of-growing-perpetuity/present-value-of-growing-perpetuity.module#PresentValueOfGrowingPerpetuityModule'
  },
  {
    path: 'solve-for-number-of-periods-pv-and-fv',
    loadChildren: './formulas/solve-for-number-of-periods-pv-and-fv/solve-for-number-of-periods-pv-and-fv.module#SolveForNumberOfPeriodsPvAndFvModule'
  },
  {
    path: 'perpetuity',
    loadChildren: './formulas/perpetuity/perpetuity.module#PerpetuityModule'
  },
  {
    path: 'present-value',
    loadChildren: './formulas/present-value/present-value.module#PresentValueModule'
  },
  {
    path: 'present-value-continuous-compounding',
    loadChildren: './formulas/present-value-continuous-compounding/present-value-continuous-compounding.module#PresentValueContinuousCompoundingModule'
  },
  {
    path: 'present-value-factor',
    loadChildren: './formulas/present-value-factor/present-value-factor.module#PresentValueFactorModule'
  },
  {
    path: 'rule-of-seventy-two',
    loadChildren: './formulas/rule-of-seventy-two/rule-of-seventy-two.module#RuleOfSeventyTwoModule'
  },
  {
    path: 'weighted-average',
    loadChildren: './formulas/weighted-average/weighted-average.module#WeightedAverageModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralFinanceRoutingModule { }
