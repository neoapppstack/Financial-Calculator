import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinationService } from './../../../_service/formula/stocks-bonds-defination.service';

@Component({
  selector: 'app-price-to-sales-ratio',
  templateUrl: './price-to-sales-ratio.component.html',
  styleUrls: ['./price-to-sales-ratio.component.scss']
})
export class PriceToSalesRatioComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: StocksBondsFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getPriceToSalesRatioDef();
  }

}
