import { FinancialMarketsComponent } from './financial-markets.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FinancialMarketsComponent
  },
  {
    path: 'rate-of-inflation',
    loadChildren: './financial-markets-formulas/rate-of-inflation/rate-of-inflation.module#RateOfInflationModule'
  },
  {
    path: 'real-rate-of-return',
    loadChildren: './financial-markets-formulas/real-rate-of-return/real-rate-of-return.module#RealRateOfReturnModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialMarketsRoutingModule { }
