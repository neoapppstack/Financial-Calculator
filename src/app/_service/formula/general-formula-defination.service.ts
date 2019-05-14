import { AnnuityPaymentFromFutureValueDef } from './../../_constant/formula-defination/general-finance/annuity-payment-from-future-value-def';
import { AnnuityPaymentFormulaDef } from './../../_constant/formula-defination/general-finance/annuity-payment-formula-def';
import { NoOfPeriodsOfAnnuityFromFVComponentDef } from './../../_constant/formula-defination/general-finance/no-of-periods-of-annuity-from-fv';
import { FutureValueOfAnnuityContinuousCompoundingDef } from './../../_constant/formula-defination/general-finance/future-value-of-annuity-continuous-compounding-def';
import { FutureValueOfAnnuityDef } from './../../_constant/formula-defination/general-finance/future-value-of-annuity-def';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralFormulaDefinationService {

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
}
