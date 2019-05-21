import { SimpleInterestDef } from './../../_constant/formula-definition/banking-formula/simple-interest-def';
import { RemainingBalanceFormulaDef } from './../../_constant/formula-definition/banking-formula/remaining-balance-formula-def';
import { LoanToValueRatioDef } from './../../_constant/formula-definition/banking-formula/loan-to-value-ratio-def';
import { LoanToDepositRatioDef } from './../../_constant/formula-definition/banking-formula/loan-to-deposit-ratio-def';
import { LoanPaymentFormulaDef } from './../../_constant/formula-definition/banking-formula/loan-payment-formula-def';
import { LoanBalloonBalanceDef } from './../../_constant/formula-definition/banking-formula/loan-balloon-balance-def';
import { DebtToIncomeRatioDef } from './../../_constant/formula-definition/banking-formula/debt-to-income-ratio-def';
import { ContinuousCompoundingDef } from './../../_constant/formula-definition/banking-formula/continuous-compounding-def';
import { CompoundInterestDef } from './../../_constant/formula-definition/banking-formula/compound-interest-def';
import { BalloonLoanPaymentDef } from './../../_constant/formula-definition/banking-formula/balloon-loan-payment-def';
import { AnnualPercentageYieldDef } from './../../_constant/formula-definition/banking-formula/annual-percentage-yield-def';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankingFormulaDefinitionService {

  constructor() { }

  getAnnualPercentageYieldDef() {
    return AnnualPercentageYieldDef;
  }

  getBalloonLoanPaymentDef() {
    return BalloonLoanPaymentDef;
  }

  getCompoundInterestDef() {
    return CompoundInterestDef;
  }

  getContinuousCompoundingDef() {
    return ContinuousCompoundingDef;
  }

  getDebtToIncomeRatioDef() {
    return DebtToIncomeRatioDef;
  }

  getLoanBalloonBalanceDef() {
    return LoanBalloonBalanceDef;
  }

  getLoanPaymentFormulaDef() {
    return LoanPaymentFormulaDef;
  }

  getLoanToDepositRatioDef() {
    return LoanToDepositRatioDef;
  }

  getLoanToValueRatioDef() {
    return LoanToValueRatioDef;
  }

  getRemainingBalanceFormulaDef() {
    return RemainingBalanceFormulaDef;
  }

  getSimpleInterestDef() {
    return SimpleInterestDef;
  }



}
