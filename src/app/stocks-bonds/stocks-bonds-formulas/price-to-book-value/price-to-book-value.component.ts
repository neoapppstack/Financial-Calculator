import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinationService } from './../../../_service/formula/stocks-bonds-defination.service';

@Component({
  selector: 'app-price-to-book-value',
  templateUrl: './price-to-book-value.component.html',
  styleUrls: ['./price-to-book-value.component.scss']
})
export class PriceToBookValueComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: StocksBondsFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getPriceToBookValueDef();
  }

}
