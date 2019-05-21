import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinationService } from './../../../_service/formula/stocks-bonds-defination.service';

@Component({
  selector: 'app-price-earnings-ratio',
  templateUrl: './price-earnings-ratio.component.html',
  styleUrls: ['./price-earnings-ratio.component.scss']
})
export class PriceEarningsRatioComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: StocksBondsFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getPriceEarningsRatioDef();
  }

}
