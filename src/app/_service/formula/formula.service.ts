import { Injectable } from '@angular/core';
import { FormulaData } from './../../_models/formula/formula-data';
import { GeneralFormulaList } from './../../_constant/general-formula-list';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  private generalFormulaList: FormulaData[] = [];

  constructor() {
    this.generalFormulaList = GeneralFormulaList;
  }


  getGeneralFormula() {
    return this.generalFormulaList;
  }

  getBankingFormulas() {
    return {};
  }

  getStocksFormulas() {
    return {};
  }

  getCorporateFormulas() {
    return {};
  }

  getFinancialFormulas() {
    return {};
  }

}
