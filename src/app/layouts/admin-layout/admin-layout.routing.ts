import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'general-finance',
      loadChildren: './../../general-finance/general-finance.module#GeneralFinanceModule',
    },
    {
      path: 'banking',
      loadChildren: './../../banking/banking.module#BankingModule',
    },
    {
      path: 'stocks-bonds',
      loadChildren: './../../stocks-bonds/stocks-bonds.module#StocksBondsModule',
    },
    {
      path: 'corporate-business',
      loadChildren: './../../corporate-business/corporate-business.module#CorporateBusinessModule',
    },
    {
      path: 'financial-markets',
      loadChildren: './../../financial-markets/financial-markets.module#FinancialMarketsModule',
    }
];
