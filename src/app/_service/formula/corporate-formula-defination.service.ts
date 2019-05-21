import { ReturnOnInvestmentDef } from './../../_constant/formula-defination/corporate-formula/return-on-investment-def';
import { ReturnOnAssetsDef } from './../../_constant/formula-defination/corporate-formula/return-on-assets-der';
import { ReceivablesTurnoverRatioDef } from './../../_constant/formula-defination/corporate-formula/receivables-turnover-ratio-def';
import { QuickRatioDef } from './../../_constant/formula-defination/corporate-formula/quick-ratio-def';
import { PaybackPeriodDef } from './../../_constant/formula-defination/corporate-formula/payback-period-def';
import { NetWorkingCapitalDef } from './../../_constant/formula-defination/corporate-formula/net-working-capital-def';
import { NetProfitMarginDef } from './../../_constant/formula-defination/corporate-formula/net-profit-margin-def';
import { NetPresentValueDef } from './../../_constant/formula-defination/corporate-formula/net-present-value-def';
import { InventoryTurnoverRatioDef } from './../../_constant/formula-defination/corporate-formula/inventory-turnover-ratio-def';
import { InterestCoverageRatioDef } from './../../_constant/formula-defination/corporate-formula/interest-coverage-ratio-def';
import { FreeCashFlowToEquityDef } from './../../_constant/formula-defination/corporate-formula/free-cash-flow-to-equity-def';
import { EquivalentAnnualAnnuityDef } from './../../_constant/formula-defination/corporate-formula/equivalent-annual-annuity-def';
import { DiscountedPaybackPeriodDef } from './../../_constant/formula-defination/corporate-formula/discounted-payback-period-def';
import { DebtToEquityRatioDef } from './../../_constant/formula-defination/corporate-formula/debt-to-equity-ratio-def';
import { DebtRatioDef } from './../../_constant/formula-defination/corporate-formula/debt-ratio-def';
import { DebtCoverageRatioDef } from './../../_constant/formula-defination/corporate-formula/debt-coverage-ratio-def';
import { DaysInInventoryDef } from './../../_constant/formula-defination/corporate-formula/days-in-inventory-def';
import { CurrentRatioDef } from './../../_constant/formula-defination/corporate-formula/current-ratio-def';
import { ContributionMarginDef } from './../../_constant/formula-defination/corporate-formula/contribution-margin-def';
import { AverageCollectionPeriodDef } from './../../_constant/formula-defination/general-finance/average-collection-period-def';
import { AssetTurnoverRatioDef } from './../../_constant/formula-defination/corporate-formula/asset-turnover-ratio-def';
import { AssetToSalesRatioDef } from './../../_constant/formula-defination/corporate-formula/asset-to-sales-ratio-def';
import { Injectable } from '@angular/core';
import { RetentionRatioDef } from '../../_constant/formula-defination/corporate-formula/retention-ratio-def';
import { ReturnOnEquityDef } from '../../_constant/formula-defination/corporate-formula/return-on-equity-def';

@Injectable({
  providedIn: 'root'
})
export class CorporateFormulaDefinationService {

  constructor() { }

  getAssetToSalesRatioDef() {
    return AssetToSalesRatioDef;
  }

  getAssetTurnoverRatioDef() {
    return AssetTurnoverRatioDef;
  }

  getAverageCollectionPeriodDef() {
    return AverageCollectionPeriodDef;
  }

  getContributionMarginDef() {
    return ContributionMarginDef;
  }

  getCurrentRatioDef() {
    return CurrentRatioDef;
  }

  getDaysInInventoryDef() {
    return DaysInInventoryDef;
  }

  getDebtCoverageRatioDef() {
    return DebtCoverageRatioDef;
  }

  getDebtRatioDef() {
    return DebtRatioDef;
  }

  getDebtToEquityRatioDef() {
    return DebtToEquityRatioDef;
  }

  getDiscountedPaybackPeriodDef() {
    return DiscountedPaybackPeriodDef;
  }

  getEquivalentAnnualAnnuityDef() {
    return EquivalentAnnualAnnuityDef;
  }

  getFreeCashFlowToEquityDef() {
    return FreeCashFlowToEquityDef;
  }

  getInterestCoverageRatioDef() {
    return InterestCoverageRatioDef;
  }

  getInventoryTurnoverRatioDef() {
    return InventoryTurnoverRatioDef;
  }

  getNetPresentValueDef() {
    return NetPresentValueDef;
  }

  getNetProfitMarginDef() {
    return NetProfitMarginDef;
  }

  getNetWorkingCapitalDef() {
    return NetWorkingCapitalDef;
  }

  getPaybackPeriodDef() {
    return PaybackPeriodDef;
  }

  getQuickRatioDef() {
    return QuickRatioDef;
  }

  getReceivablesTurnoverRatioDef() {
    return ReceivablesTurnoverRatioDef;
  }

  getRetentionRatioDef() {
    return RetentionRatioDef;
  }

  getReturnOnAssetsDef() {
    return ReturnOnAssetsDef;
  }

  getReturnOnEquityDef() {
    return ReturnOnEquityDef;
  }

  getReturnOnInvestmentDef() {
    return ReturnOnInvestmentDef;
  }

}
