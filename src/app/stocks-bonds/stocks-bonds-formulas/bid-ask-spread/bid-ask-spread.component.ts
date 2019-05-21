import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { StocksBondsFormulaDefinationService } from './../../../_service/formula/stocks-bonds-defination.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bid-ask-spread',
  templateUrl: './bid-ask-spread.component.html',
  styleUrls: ['./bid-ask-spread.component.scss']
})
export class BidAskSpreadComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: StocksBondsFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getBidAskSpreadDef();
  }

}
