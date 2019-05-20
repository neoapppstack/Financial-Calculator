import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankingComponent } from './banking.component';

const routes: Routes = [
  {
    path: '',
    component: BankingComponent
  },
  {
    path: 'annual-percentage-yield',
    loadChildren: './banking-formulas/annual-percentage-yield/annual-percentage-yield.module#AnnualPercentageYieldModule'
  },
  {
    path: 'balloon-loan-payment',
    loadChildren: './banking-formulas/balloon-loan-payment/balloon-loan-payment.module#BalloonLoanPaymentModule'
  },
  {
    path: 'compound-interest',
    loadChildren: './banking-formulas/compound-interest/compound-interest.module#CompoundInterestModule'
  },
  {
    path: 'continuous-compounding',
    loadChildren: './banking-formulas/continuous-compounding/continuous-compounding.module#ContinuousCompoundingModule'
  },
  {
    path: 'debt-to-income-ratio',
    loadChildren: './banking-formulas/debt-to-income-ratio/debt-to-income-ratio.module#DebtToIncomeRatioModule'
  },
  {
    path: 'loan-balloon-balance',
    loadChildren: './banking-formulas/loan-balloon-balance/loan-balloon-balance.module#LoanBalloonBalanceModule'
  },
  {
    path: 'loan-payment-formula',
    loadChildren: './banking-formulas/loan-payment-formula/loan-payment-formula.module#LoanPaymentFormulaModule'
  },
  {
    path: 'remaining-balance-formula',
    loadChildren: './banking-formulas/remaining-balance-formula/remaining-balance-formula.module#RemainingBalanceFormulaModule'
  },
  {
    path: 'loan-to-deposit-ratio',
    loadChildren: './banking-formulas/loan-to-deposit-ratio/loan-to-deposit-ratio.module#LoanToDepositRatioModule'
  },
  {
    path: 'loan-to-value-ratio',
    loadChildren: './banking-formulas/loan-to-value-ratio/loan-to-value-ratio.module#LoanToValueRatioModule'
  },
  {
    path: 'simple-interest',
    loadChildren: './banking-formulas/simple-interest/simple-interest.module#SimpleInterestModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankingRoutingModule { }
