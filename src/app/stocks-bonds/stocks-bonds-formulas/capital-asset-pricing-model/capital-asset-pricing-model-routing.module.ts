import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapitalAssetPricingModelComponent } from './capital-asset-pricing-model.component';

const routes: Routes = [
  {
    path: '',
    component: CapitalAssetPricingModelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapitalAssetPricingModelRoutingModule { }
