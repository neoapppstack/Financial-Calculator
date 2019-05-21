import { CorporateFormulaDefinitionService } from './../../../_service/formula/corporate-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-turnover-ratio',
  templateUrl: './asset-turnover-ratio.component.html',
  styleUrls: ['./asset-turnover-ratio.component.scss']
})
export class AssetTurnoverRatioComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: CorporateFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getAssetTurnoverRatioDef();
  }

}
