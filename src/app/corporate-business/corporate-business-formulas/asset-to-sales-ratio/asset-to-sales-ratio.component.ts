import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { CorporateFormulaDefinitionService } from './../../../_service/formula/corporate-formula-definition.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-to-sales-ratio',
  templateUrl: './asset-to-sales-ratio.component.html',
  styleUrls: ['./asset-to-sales-ratio.component.scss']
})
export class AssetToSalesRatioComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: CorporateFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getAssetToSalesRatioDef();
  }

}
