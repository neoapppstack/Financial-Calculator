import { CorporateFormulaDefinationService } from './../../../_service/formula/corporate-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-turnover-ratio',
  templateUrl: './asset-turnover-ratio.component.html',
  styleUrls: ['./asset-turnover-ratio.component.scss']
})
export class AssetTurnoverRatioComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: CorporateFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getAssetTurnoverRatioDef();
  }

}
