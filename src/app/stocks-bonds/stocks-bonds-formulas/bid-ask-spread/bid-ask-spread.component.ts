import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { StocksBondsFormulaDefinitionService } from '../../../_service/formula/stocks-bonds-definition.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bid-ask-spread',
  templateUrl: './bid-ask-spread.component.html',
  styleUrls: ['./bid-ask-spread.component.scss']
})
export class BidAskSpreadComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: StocksBondsFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getBidAskSpreadDef();
  }

}
