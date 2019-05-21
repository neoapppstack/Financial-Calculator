import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinitionService } from '../../../_service/formula/stocks-bonds-definition.service';

@Component({
  selector: 'app-dividend-payout-ratio',
  templateUrl: './dividend-payout-ratio.component.html',
  styleUrls: ['./dividend-payout-ratio.component.scss']
})
export class DividendPayoutRatioComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: StocksBondsFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getDividendPayoutRatioDef();
  }

}
