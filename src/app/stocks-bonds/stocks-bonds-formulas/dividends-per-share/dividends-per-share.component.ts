import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinationService } from './../../../_service/formula/stocks-bonds-defination.service';

@Component({
  selector: 'app-dividends-per-share',
  templateUrl: './dividends-per-share.component.html',
  styleUrls: ['./dividends-per-share.component.scss']
})
export class DividendsPerShareComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: StocksBondsFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getDividendsPerShareDef();
  }

}
