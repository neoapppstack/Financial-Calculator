import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinitionService } from '../../../_service/formula/stocks-bonds-definition.service';

@Component({
  selector: 'app-book-value-per-share',
  templateUrl: './book-value-per-share.component.html',
  styleUrls: ['./book-value-per-share.component.scss']
})
export class BookValuePerShareComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: StocksBondsFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getBookValuePerShareDef();
  }

}
