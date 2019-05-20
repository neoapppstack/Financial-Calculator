import { StocksBondsComponent } from './stocks-bonds.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StocksBondsComponent
  },
  {
    path: 'bid-ask-spread',
    loadChildren: './stocks-bonds-formulas/bid-ask-spread/bid-ask-spread.module#BidAskSpreadModule'
  },
  {
    path: 'bond-equivalent-yield',
    loadChildren: './stocks-bonds-formulas/bond-equivalent-yield/bond-equivalent-yield.module#BondEquivalentYieldModule'
  },
  {
    path: 'book-value-per-share',
    loadChildren: './stocks-bonds-formulas/book-value-per-share/book-value-per-share.module#BookValuePerShareModule'
  },
  {
    path: 'capital-asset-pricing-model',
    loadChildren: './stocks-bonds-formulas/capital-asset-pricing-model/capital-asset-pricing-model.module#CapitalAssetPricingModelModule'
  },
  {
    path: 'capital-gains-yield',
    loadChildren: './stocks-bonds-formulas/capital-gains-yield/capital-gains-yield.module#CapitalGainsYieldModule'
  },
  {
    path: 'current-yield',
    loadChildren: './stocks-bonds-formulas/current-yield/current-yield.module#CurrentYieldModule'
  },
  {
    path: 'diluted-eps',
    loadChildren: './stocks-bonds-formulas/diluted-eps/diluted-eps.module#DilutedEpsModule'
  },
  {
    path: 'dividend-payout-ratio',
    loadChildren: './stocks-bonds-formulas/dividend-payout-ratio/dividend-payout-ratio.module#DividendPayoutRatioModule'
  },
  {
    path: 'dividend-yield',
    loadChildren: './stocks-bonds-formulas/dividend-yield/dividend-yield.module#DividendYieldModule'
  },
  {
    path: 'dividends-per-share',
    loadChildren: './stocks-bonds-formulas/dividends-per-share/dividends-per-share.module#DividendsPerShareModule'
  },
  {
    path: 'earnings-per-share',
    loadChildren: './stocks-bonds-formulas/earnings-per-share/earnings-per-share.module#EarningsPerShareModule'
  },
  {
    path: 'equity-multiplier',
    loadChildren: './stocks-bonds-formulas/equity-multiplier/equity-multiplier.module#EquityMultiplierModule'
  },
  {
    path: 'estimated-earnings',
    loadChildren: './stocks-bonds-formulas/estimated-earnings/estimated-earnings.module#EstimatedEarningsModule'
  },
  {
    path: 'deometric-mean-return',
    loadChildren: './stocks-bonds-formulas/deometric-mean-return/deometric-mean-return.module#DeometricMeanReturnModule'
  },
  {
    path: 'holding-period-return',
    loadChildren: './stocks-bonds-formulas/holding-period-return/holding-period-return.module#HoldingPeriodReturnModule'
  },
  {
    path: 'net-asset-value',
    loadChildren: './stocks-bonds-formulas/net-asset-value/net-asset-value.module#NetAssetValueModule'
  },
  {
    path: 'preferred-stock',
    loadChildren: './stocks-bonds-formulas/preferred-stock/preferred-stock.module#PreferredStockModule'
  },
  {
    path: 'price-to-book-value',
    loadChildren: './stocks-bonds-formulas/price-to-book-value/price-to-book-value.module#PriceToBookValueModule'
  },
  {
    path: 'price-earnings-ratio',
    loadChildren: './stocks-bonds-formulas/price-earnings-ratio/price-earnings-ratio.module#PriceEarningsRatioModule'
  },
  {
    path: 'price-to-sales-ratio',
    loadChildren: './stocks-bonds-formulas/price-to-sales-ratio/price-to-sales-ratio.module#PriceToSalesRatioModule'
  },
  {
    path: 'risk-premium',
    loadChildren: './stocks-bonds-formulas/risk-premium/risk-premium.module#RiskPremiumModule'
  },
  {
    path: 'pv-of-stock-with-constant-growth',
    loadChildren: './stocks-bonds-formulas/pv-of-stock-with-constant-growth/pv-of-stock-with-constant-growth.module#PvOfStockWithConstantGrowthModule'
  },
  {
    path: 'pv-of-stock-with-zero-growth',
    loadChildren: './stocks-bonds-formulas/pv-of-stock-with-zero-growth/pv-of-stock-with-zero-growth.module#PvOfStockWithZeroGrowthModule'
  },
  {
    path: 'tax-equivalent-yield',
    loadChildren: './stocks-bonds-formulas/tax-equivalent-yield/tax-equivalent-yield.module#TaxEquivalentYieldModule'
  },
  {
    path: 'total-stock-return',
    loadChildren: './stocks-bonds-formulas/total-stock-return/total-stock-return.module#TotalStockReturnModule'
  },
  {
    path: 'yield-to-maturity',
    loadChildren: './stocks-bonds-formulas/yield-to-maturity/yield-to-maturity.module#YieldToMaturityModule'
  },
  {
    path: 'zero-coupon-bond-value',
    loadChildren: './stocks-bonds-formulas/zero-coupon-bond-value/zero-coupon-bond-value.module#ZeroCouponBondValueModule'
  },
  {
    path: 'zero-coupon-bond-effective-yield',
    loadChildren: './stocks-bonds-formulas/zero-coupon-bond-effective-yield/zero-coupon-bond-effective-yield.module#ZeroCouponBondEffectiveYieldModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksBondsRoutingModule { }
