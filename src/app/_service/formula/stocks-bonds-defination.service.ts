import { TaxEquivalentYieldDef } from './../../_constant/formula-defination/stocks-bonds/tax-equivalent-yield-def';
import { RiskPremiumDef } from './../../_constant/formula-defination/stocks-bonds/risk-premium-def';
import { PvOfStockWithZeroGrowthDef } from './../../_constant/formula-defination/stocks-bonds/pv-of-stock-with-zero-growth-def';
import { PriceToSalesRatioDef } from './../../_constant/formula-defination/stocks-bonds/price-to-sales-ratio-def';
import { PriceToBookValueDef } from './../../_constant/formula-defination/stocks-bonds/price-to-book-value-def';
import { PriceEarningsRatioDef } from './../../_constant/formula-defination/stocks-bonds/price-earnings-ratio-def';
import { PreferredStockDef } from './../../_constant/formula-defination/stocks-bonds/preferred-stock-def';
import { NetAssetValueDef } from './../../_constant/formula-defination/stocks-bonds/net-asset-value-def';
import { HoldingPeriodReturnDef } from './../../_constant/formula-defination/stocks-bonds/holding-period-return-def';
import { EstimatedEarningsDef } from './../../_constant/formula-defination/stocks-bonds/estimated-earnings-def';
import { EquityMultiplierDef } from './../../_constant/formula-defination/stocks-bonds/equity-multiplier-def';
import { EarningsPerShareDef } from './../../_constant/formula-defination/stocks-bonds/earnings-per-share-def';
import { DividendsPerShareDef } from './../../_constant/formula-defination/stocks-bonds/dividends-per-share-def';
import { DividendYieldDef } from './../../_constant/formula-defination/stocks-bonds/dividend-yield-def';
import { DividendPayoutRatioDef } from './../../_constant/formula-defination/stocks-bonds/dividend-payout-ratio-def';
import { DilutedEpsdDef } from './../../_constant/formula-defination/stocks-bonds/diluted-eps-def';
import { DeometricMeanReturnDef } from './../../_constant/formula-defination/stocks-bonds/deometric-mean-return-def';
import { CurrentYielddDef } from './../../_constant/formula-defination/stocks-bonds/current-yield-def';
import { CapitalGainsYielddDef } from './../../_constant/formula-defination/stocks-bonds/capital-gains-yield-def';
import { CapitalAssetPricingModelDef } from './../../_constant/formula-defination/stocks-bonds/capital-asset-pricing-model-def';
import { BookValuePerShareDef } from './../../_constant/formula-defination/stocks-bonds/book-value-per-share-def';
import { BondEquivalentYieldDef } from './../../_constant/formula-defination/stocks-bonds/bond-equivalent-yield-def';
import { BidAskSpreadDef } from './../../_constant/formula-defination/stocks-bonds/bid-ask-spread-def';
import { Injectable } from '@angular/core';
import { PvOfStockWithConstantGrowthDef } from './../../_constant/formula-defination/stocks-bonds/pv-of-stock-with-constant-growth-def';
import { TotalStockReturnDef } from './../../_constant/formula-defination/stocks-bonds/total-stock-return-def';
import { YieldToMaturityDef } from './../../_constant/formula-defination/stocks-bonds/yield-to-maturity-def';
import { ZeroCouponBondEffectiveYieldDef } from './../../_constant/formula-defination/stocks-bonds/zero-coupon-bond-effective-yield-def';
import { ZeroCouponBondValueDef } from './../../_constant/formula-defination/stocks-bonds/zero-coupon-bond-value-def';

@Injectable({
  providedIn: 'root'
})
export class StocksBondsFormulaDefinationService {

  constructor() { }

  getBidAskSpreadDef() {
    return BidAskSpreadDef;
  }

  getBondEquivalentYieldDef() {
    return BondEquivalentYieldDef;
  }

  getBookValuePerShareDef() {
    return BookValuePerShareDef;
  }

  getCapitalAssetPricingModelDef() {
    return CapitalAssetPricingModelDef;
  }

  getCapitalGainsYielddDef() {
    return CapitalGainsYielddDef;
  }

  getCurrentYielddDef() {
    return CurrentYielddDef;
  }

  getDeometricMeanReturnDef() {
    return DeometricMeanReturnDef;
  }

  getDilutedEpsdDef() {
    return DilutedEpsdDef;
  }

  getDividendPayoutRatioDef() {
    return DividendPayoutRatioDef;
  }

  getDividendYieldDef() {
    return DividendYieldDef;
  }

  getDividendsPerShareDef() {
    return DividendsPerShareDef;
  }

  getEarningsPerShareDef() {
    return EarningsPerShareDef;
  }

  getEquityMultiplierDef() {
    return EquityMultiplierDef;
  }

  getEstimatedEarningsDef() {
    return EstimatedEarningsDef;
  }

  getHoldingPeriodReturnDef() {
    return HoldingPeriodReturnDef;
  }

  getNetAssetValueDef() {
    return NetAssetValueDef;
  }

  getPreferredStockDef() {
    return PreferredStockDef;
  }

  getPriceEarningsRatioDef() {
    return PriceEarningsRatioDef;
  }

  getPriceToBookValueDef() {
    return PriceToBookValueDef;
  }

  getPriceToSalesRatioDef() {
    return PriceToSalesRatioDef;
  }

  getPvOfStockWithConstantGrowthDef() {
    return PvOfStockWithConstantGrowthDef;
  }

  getPvOfStockWithZeroGrowthDef() {
    return PvOfStockWithZeroGrowthDef;
  }

  getRiskPremiumDef() {
    return RiskPremiumDef;
  }

  getTaxEquivalentYieldDef() {
    return TaxEquivalentYieldDef;
  }

  getTotalStockReturnDef() {
    return TotalStockReturnDef;
  }

  getYieldToMaturityDef() {
    return YieldToMaturityDef;
  }

  getZeroCouponBondEffectiveYieldDef() {
    return ZeroCouponBondEffectiveYieldDef;
  }

  getZeroCouponBondValueDef() {
    return ZeroCouponBondValueDef;
  }

}
