import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinationService } from './../../../_service/formula/stocks-bonds-defination.service';

@Component({
  selector: 'app-dividend-payout-ratio',
  templateUrl: './dividend-payout-ratio.component.html',
  styleUrls: ['./dividend-payout-ratio.component.scss']
})
export class DividendPayoutRatioComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: StocksBondsFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getDividendPayoutRatioDef();
  }

}
