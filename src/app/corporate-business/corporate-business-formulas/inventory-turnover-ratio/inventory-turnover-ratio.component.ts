import { CorporateFormulaDefinationService } from './../../../_service/formula/corporate-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-turnover-ratio',
  templateUrl: './inventory-turnover-ratio.component.html',
  styleUrls: ['./inventory-turnover-ratio.component.scss']
})
export class InventoryTurnoverRatioComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: CorporateFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getInventoryTurnoverRatioDef();
  }

}
