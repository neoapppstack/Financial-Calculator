import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinationService } from './../../../_service/formula/stocks-bonds-defination.service';

@Component({
  selector: 'app-book-value-per-share',
  templateUrl: './book-value-per-share.component.html',
  styleUrls: ['./book-value-per-share.component.scss']
})
export class BookValuePerShareComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: StocksBondsFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getBookValuePerShareDef();
  }

}
