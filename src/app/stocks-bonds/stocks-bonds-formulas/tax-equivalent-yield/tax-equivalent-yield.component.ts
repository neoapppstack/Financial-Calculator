import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinitionService } from '../../../_service/formula/stocks-bonds-definition.service';

@Component({
  selector: 'app-tax-equivalent-yield',
  templateUrl: './tax-equivalent-yield.component.html',
  styleUrls: ['./tax-equivalent-yield.component.scss']
})
export class TaxEquivalentYieldComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: StocksBondsFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getTaxEquivalentYieldDef();
  }

}
