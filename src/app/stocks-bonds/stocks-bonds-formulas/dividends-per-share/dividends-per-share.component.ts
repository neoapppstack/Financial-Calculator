import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinitionService } from '../../../_service/formula/stocks-bonds-definition.service';

@Component({
  selector: 'app-dividends-per-share',
  templateUrl: './dividends-per-share.component.html',
  styleUrls: ['./dividends-per-share.component.scss']
})
export class DividendsPerShareComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: StocksBondsFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getDividendsPerShareDef();
  }

}
