import { RealRateOfReturnDef } from './../../_constant/formula-defination/financial-markets/real-rate-of-return-def';
import { RateOfInflationDef } from './../../_constant/formula-defination/financial-markets/rate-of-inflation-def';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinancialMarketFormulaDefinationService {

  constructor() { }

  getRateOfInflationDef() {
    return RateOfInflationDef;
  }

  getRealRateOfReturnDef() {
    return RealRateOfReturnDef;
  }

}
