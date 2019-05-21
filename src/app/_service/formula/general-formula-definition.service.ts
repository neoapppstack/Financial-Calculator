import { NoOfPeriodsOfAnnuityFromPvDef } from './../../_constant/formula-definition/general-finance/no-of-periods-of-annuity-from-pv-def';
import { PresentValueOfAnnuityDef } from './../../_constant/formula-definition/general-finance/present-value-of-annuity-def';
import { AverageCollectionPeriodDef } from './../../_constant/formula-definition/general-finance/average-collection-period-def';
import { PresentValueAnnuityFactorDef } from './../../_constant/formula-definition/general-finance/present-value-annuity-factor-def';
import { PresentValueOfAnnuityDueDef } from './../../_constant/formula-definition/general-finance/present-value-of-annuity-due-def';
import { FutureValueOfAnnuityDueDef } from './../../_constant/formula-definition/general-finance/future-value-of-annuity-due-def';
import { AnnuityDuePaymentFvDef } from './../../_constant/formula-definition/general-finance/annuity-due-payment-fv-def';
import { AnnuityDuePaymentPvDef } from './../../_constant/formula-definition/general-finance/annuity-due-payment-pv-def';
import { DoublingTimeDef } from './../../_constant/formula-definition/general-finance/doubling-time-def';
import { DoublingTimeContinuousCompoundingDef } from './../../_constant/formula-definition/general-finance/doubling-time-continuous-compounding-def';
import { DoublingTimeSimpleInterestDef } from './../../_constant/formula-definition/general-finance/doubling-time-simple-interest-def';
import { FutureValueDef } from './../../_constant/formula-definition/general-finance/future-value-def';
import { FutureValueContinuousCompoundingDef } from './../../_constant/formula-definition/general-finance/future-value-continuous-compounding-def';
import { FutureValueFactorDef } from './../../_constant/formula-definition/general-finance/future-value-factor-def';
import { FutureValueOfGrowingAnnuityDef } from './../../_constant/formula-definition/general-finance/future-value-of-growing-annuity-def';
import { GrowingAnnuityPaymentDef } from './../../_constant/formula-definition/general-finance/growing-annuity-payment-def';
import { GrowingAnnuityPaymentFromFutureValueDef } from './../../_constant/formula-definition/general-finance/growing-annuity-payment-from-future-value-def';
import { PresentValueOfGrowingAnnuityDef } from './../../_constant/formula-definition/general-finance/present-value-of-growing-annuity-def';
import { PresentValueOfGrowingPerpetuityDef } from './../../_constant/formula-definition/general-finance/present-value-of-growing-perpetuity-def';
import { SolveForNumberOfPeriodsPvAndFvDef } from './../../_constant/formula-definition/general-finance/solve-for-number-of-periods-pv-and-fv-def';
import { PerpetuityDef } from './../../_constant/formula-definition/general-finance/perpetuity-def';
import { PresentValueDef } from './../../_constant/formula-definition/general-finance/present-value-def';
import { PresentValueContinuousCompoundingDef } from './../../_constant/formula-definition/general-finance/present-value-continuous-compounding-def';
import { PresentValueFactorDef } from './../../_constant/formula-definition/general-finance/present-value-factor-def';
import { WeightedAverageDef } from './../../_constant/formula-definition/general-finance/weighted-average-def';
import { RuleOfSeventyTwoDef } from './../../_constant/formula-definition/general-finance/rule-of-seventy-two-def';
import { AnnuityPaymentFromFutureValueDef } from './../../_constant/formula-definition/general-finance/annuity-payment-from-future-value-def';
import { AnnuityPaymentFormulaDef } from './../../_constant/formula-definition/general-finance/annuity-payment-formula-def';
import { NoOfPeriodsOfAnnuityFromFVComponentDef } from './../../_constant/formula-definition/general-finance/no-of-periods-of-annuity-from-fv';
import { FutureValueOfAnnuityContinuousCompoundingDef } from './../../_constant/formula-definition/general-finance/future-value-of-annuity-continuous-compounding-def';
import { FutureValueOfAnnuityDef } from './../../_constant/formula-definition/general-finance/future-value-of-annuity-def';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralFormulaDefinitionService {

  constructor() { }

  getFutureValueOfAnnuityDef() {
    return FutureValueOfAnnuityDef;
  }

  getFutureValueOfAnnuityContinuousCompoundingDef() {
    return FutureValueOfAnnuityContinuousCompoundingDef;
  }

  getNoOfPeriodsOfAnnuityFromFVComponentDef() {
    return NoOfPeriodsOfAnnuityFromFVComponentDef;
  }

  getAnnuityPaymentFormulaDef() {
    return AnnuityPaymentFormulaDef;
  }

  getAnnuityPaymentFromFutureValueDef() {
    return AnnuityPaymentFromFutureValueDef;
  }

  getNoOfPeriodsOfAnnuityFromPvDef() {
    return NoOfPeriodsOfAnnuityFromPvDef;
  }

  getPresentValueOfAnnuityDef() {
    return PresentValueOfAnnuityDef;
  }

  getAverageCollectionPeriodDef() {
    return AverageCollectionPeriodDef;
  }

  getPresentValueAnnuityFactorDef() {
    return PresentValueAnnuityFactorDef;
  }

  getPresentValueOfAnnuityDueDef() {
    return PresentValueOfAnnuityDueDef;
  }

  getFutureValueOfAnnuityDueDef() {
    return FutureValueOfAnnuityDueDef;
  }

  getAnnuityDuePaymentFvDef() {
    return AnnuityDuePaymentFvDef;
  }

  getAnnuityDuePaymentPvDef() {
    return AnnuityDuePaymentPvDef;
  }

  getDoublingTimeDef() {
    return DoublingTimeDef;
  }

  getDoublingTimeContinuousCompoundingDef() {
    return DoublingTimeContinuousCompoundingDef;
  }

  getDoublingTimeSimpleInterestDef() {
    return DoublingTimeSimpleInterestDef;
  }

  getFutureValueDef() {
    return FutureValueDef;
  }

  getFutureValueContinuousCompoundingDef() {
    return FutureValueContinuousCompoundingDef;
  }

  getFutureValueFactorDef() {
    return FutureValueFactorDef;
  }

  getFutureValueOfGrowingAnnuityDef() {
    return FutureValueOfGrowingAnnuityDef;
  }

  getGrowingAnnuityPaymentDef() {
    return GrowingAnnuityPaymentDef;
  }

  getGrowingAnnuityPaymentFromFutureValueDef() {
    return GrowingAnnuityPaymentFromFutureValueDef;
  }

  getPresentValueOfGrowingAnnuityDef() {
    return PresentValueOfGrowingAnnuityDef;
  }

  getPresentValueOfGrowingPerpetuityDef() {
    return PresentValueOfGrowingPerpetuityDef;
  }

  getSolveForNumberOfPeriodsPvAndFvDef() {
    return SolveForNumberOfPeriodsPvAndFvDef;
  }

  getPerpetuityDef() {
    return PerpetuityDef;
  }

  getPresentValueDef() {
    return PresentValueDef;
  }

  getPresentValueContinuousCompoundingDef() {
    return PresentValueContinuousCompoundingDef;
  }

  getPresentValueFactorDef() {
    return PresentValueFactorDef;
  }

  getRuleOfSeventyTwoDef() {
    return RuleOfSeventyTwoDef;
  }

  getWeightedAverageDef() {
    return WeightedAverageDef;
  }
}
