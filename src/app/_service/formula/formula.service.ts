import { FinancialMarketFormulaList } from './../../_constant/financial-market-formula-list';
import { CorporateBusinessFormulaList } from './../../_constant/corporate-formula-list';
import { StocksBondsFormulaList } from './../../_constant/stocks-formula-list';
import { BankingFormulaList } from '../../_constant/banking-formula-list';
import { Injectable } from '@angular/core';
import { FormulaData } from './../../_models/formula/formula-data';
import { GeneralFormulaList } from './../../_constant/general-formula-list';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  private generalFormulaList: FormulaData[] = [];
  private bankingFormulaList: FormulaData[] = [];
  private stocksBondsFormulaList: FormulaData[] = [];
  private corporateBusinessFormulaList: FormulaData[] = [];
  private financialMarketFormulaList: FormulaData[] = [];


  constructor() {
    this.generalFormulaList = GeneralFormulaList;
    this.bankingFormulaList = BankingFormulaList;
    this.stocksBondsFormulaList = StocksBondsFormulaList;
    this.corporateBusinessFormulaList = CorporateBusinessFormulaList;
    this.financialMarketFormulaList = FinancialMarketFormulaList;
  }


  getGeneralFormula() {
    return this.generalFormulaList;
  }

  getBankingFormulas() {
    return this.bankingFormulaList;
  }

  getStocksFormulas() {
    return this.stocksBondsFormulaList;
  }

  getCorporateFormulas() {
    return this.corporateBusinessFormulaList;
  }

  getFinancialFormulas() {
    return this.financialMarketFormulaList;
  }

}
