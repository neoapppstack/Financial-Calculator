import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinationService } from './../../../_service/formula/stocks-bonds-defination.service';

@Component({
  selector: 'app-capital-asset-pricing-model',
  templateUrl: './capital-asset-pricing-model.component.html',
  styleUrls: ['./capital-asset-pricing-model.component.scss']
})
export class CapitalAssetPricingModelComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: StocksBondsFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getCapitalAssetPricingModelDef();
  }

}
