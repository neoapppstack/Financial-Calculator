import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { CorporateFormulaDefinationService } from './../../../_service/formula/corporate-formula-defination.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-to-sales-ratio',
  templateUrl: './asset-to-sales-ratio.component.html',
  styleUrls: ['./asset-to-sales-ratio.component.scss']
})
export class AssetToSalesRatioComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: CorporateFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getAssetToSalesRatioDef();
  }

}
