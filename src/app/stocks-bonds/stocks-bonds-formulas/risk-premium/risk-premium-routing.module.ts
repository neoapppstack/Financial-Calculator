import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiskPremiumComponent } from './risk-premium.component';

const routes: Routes = [
  {
    path: '',
    component: RiskPremiumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiskPremiumRoutingModule { }
