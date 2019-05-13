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
}
