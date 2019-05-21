import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinationService } from './../../../_service/formula/stocks-bonds-defination.service';

@Component({
  selector: 'app-pv-of-stock-with-zero-growth',
  templateUrl: './pv-of-stock-with-zero-growth.component.html',
  styleUrls: ['./pv-of-stock-with-zero-growth.component.scss']
})
export class PvOfStockWithZeroGrowthComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: StocksBondsFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getPvOfStockWithZeroGrowthDef()
  }

}
