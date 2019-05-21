import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinationService } from './../../../_service/formula/stocks-bonds-defination.service';

@Component({
  selector: 'app-pv-of-stock-with-constant-growth',
  templateUrl: './pv-of-stock-with-constant-growth.component.html',
  styleUrls: ['./pv-of-stock-with-constant-growth.component.scss']
})
export class PvOfStockWithConstantGrowthComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: StocksBondsFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getPvOfStockWithConstantGrowthDef();
  }

}
