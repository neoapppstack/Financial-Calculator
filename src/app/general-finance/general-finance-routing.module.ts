import { GeneralFinanceComponent } from './general-finance.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GeneralFinanceComponent
  },
  {
    path: 'future-value',
    loadChildren: `./formulas/future-value-of-annuity/future-value-of-annuity.module#FutureValueOfAnnuityModule`,
  },
  {
    path: 'future-value-of-annuity-continuous-compounding',
    loadChildren: `./formulas/future-value-of-annuity-continuous-compounding/future-value-of-annuity-continuous-compounding.module#FutureValueOfAnnuityContinuousCompoundingModule`,
  },
  {
    path: 'number-of-periods-of-annuity-from-fv',
    loadChildren: `./formulas/no-of-periods-of-annuity-from-fv/no-of-periods-of-annuity-from-fv.module#NoOfPeriodsOfAnnuityFromFVModule`
  },
  {
    path: 'annuity_payment_formula',
    loadChildren: `./formulas/annuity-payment-formula/annuity-payment-formula.module#AnnuityPaymentFormulaModule`
  },
  {
    path: 'annuity-payment-from-future-value',
    loadChildren: `./formulas/annuity-payment-from-future-value/annuity-payment-from-future-value.module#AnnuityPaymentFromFutureValueModule`
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralFinanceRoutingModule { }
