import { CorporateBusinessComponent } from './corporate-business.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CorporateBusinessComponent,
  },
  {
    path: 'asset-to-sales-ratio',
    loadChildren: './corporate-business-formulas/asset-to-sales-ratio/asset-to-sales-ratio.module#AssetToSalesRatioModule'
  },
  {
    path: 'asset-turnover-ratio',
    loadChildren: './corporate-business-formulas/asset-turnover-ratio/asset-turnover-ratio.module#AssetTurnoverRatioModule'
  },
  {
    path: 'average-collection-period',
    loadChildren: './corporate-business-formulas/average-collection-period/average-collection-period.module#AverageCollectionPeriodModule'
  },
  {
    path: 'contribution-margin',
    loadChildren: './corporate-business-formulas/contribution-margin/contribution-margin.module#contribution-margin'
  },
  {
    path: 'current-ratio',
    loadChildren: './corporate-business-formulas/current-ratio/current-ratio.module#CurrentRatioModule'
  },
  {
    path: 'days-in-inventory',
    loadChildren: './corporate-business-formulas/days-in-inventory/days-in-inventory.module#DaysInInventoryModule'
  },
  {
    path:  'debt-coverage-ratio',
    loadChildren: './corporate-business-formulas/debt-coverage-ratio/debt-coverage-ratio.module#DebtCoverageRatioModule'
  },
  {
    path: 'debt-ratio',
    loadChildren: './corporate-business-formulas/debt-ratio/debt-ratio.module#DebtRatioModule'
  },
  {
    path: 'debt-to-equity-ratio',
    loadChildren: './corporate-business-formulas/debt-to-equity-ratio/debt-to-equity-ratio.module#DebtToEquityRatioModule'
  },
  {
    path: 'discounted-payback-period',
    loadChildren: './corporate-business-formulas/discounted-payback-period/discounted-payback-period.module#DiscountedPaybackPeriodModule'
  },
  {
    path: 'equivalent-annual-annuity',
    loadChildren: './corporate-business-formulas/equivalent-annual-annuity/equivalent-annual-annuity.module#EquivalentAnnualAnnuityModule'
  },
  {
    path: 'free-cash-flow-to-equity',
    loadChildren: './corporate-business-formulas/free-cash-flow-to-equity/free-cash-flow-to-equity.module#FreeCashFlowToEquityModule'
  },
  {
    path: 'free-cash-flow-to-firm',
    loadChildren: './corporate-business-formulas/free-cash-flow-to-firm/free-cash-flow-to-firm.module#FreeCashFlowToFirmModule'
  },
  {
    path: 'interest-coverage-ratio',
    loadChildren: './corporate-business-formulas/interest-coverage-ratio/interest-coverage-ratio.module#InterestCoverageRatioModule'
  },
  {
    path: 'inventory-turnover-ratio',
    loadChildren: './corporate-business-formulas/inventory-turnover-ratio/inventory-turnover-ratio.module#InventoryTurnoverRatioModule'
  },
  {
    path: 'net-present-value',
    loadChildren: './corporate-business-formulas/net-present-value/net-present-value.module#NetPresentValueModule'
  },
  {
    path: 'net-profit-margin',
    loadChildren: './corporate-business-formulas/net-profit-margin/net-profit-margin.module#NetProfitMarginModule'
  },
  {
    path: 'net-working-capital',
    loadChildren: './corporate-business-formulas/net-working-capital/net-working-capital.module#NetWorkingCapitalModule'
  },
  {
    path: 'payback-period',
    loadChildren: './corporate-business-formulas/payback-period/payback-period.module#PaybackPeriodModule'
  },
  {
    path: 'quick-ratio',
    loadChildren: './corporate-business-formulas/quick-ratio/quick-ratio.module#QuickRatioModule'
  },
  {
    path: 'receivables-turnover-ratio',
    loadChildren: './corporate-business-formulas/receivables-turnover-ratio/receivables-turnover-ratio.module#ReceivablesTurnoverRatioModule'
  },
  {
    path: 'retention-ratio',
    loadChildren: './corporate-business-formulas/retention-ratio/retention-ratio.module#RetentionRatioModule'
  },
  {
    path: 'return-on-assets',
    loadChildren: './corporate-business-formulas/return-on-assets/return-on-assets.module#ReturnOnAssetsModule'
  },
  {
    path: 'return-on-equity',
    loadChildren: './corporate-business-formulas/return-on-equity/return-on-equity.module#ReturnOnEquityModule'
  },
  {
    path: 'return-on-investment',
    loadChildren: './corporate-business-formulas/return-on-investment/return-on-investment.module#ReturnOnInvestmentModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateBusinessRoutingModule { }
