import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinitionService } from '../../../_service/formula/stocks-bonds-definition.service';

@Component({
  selector: 'app-capital-asset-pricing-model',
  templateUrl: './capital-asset-pricing-model.component.html',
  styleUrls: ['./capital-asset-pricing-model.component.scss']
})
export class CapitalAssetPricingModelComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: StocksBondsFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getCapitalAssetPricingModelDef();
  }

}
