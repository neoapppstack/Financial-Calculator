import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapitalAssetPricingModelRoutingModule } from './capital-asset-pricing-model-routing.module';
import { CapitalAssetPricingModelComponent } from './capital-asset-pricing-model.component';
import { CapitalAssetPricingModelCalComponent } from './capital-asset-pricing-model-cal/capital-asset-pricing-model-cal.component';

@NgModule({
  declarations: [CapitalAssetPricingModelComponent, CapitalAssetPricingModelCalComponent],
  imports: [
    CommonModule,
    CapitalAssetPricingModelRoutingModule,
    FormulaDefinitionModule
  ]
})
export class CapitalAssetPricingModelModule { }
