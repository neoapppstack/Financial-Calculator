import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinitionService } from '../../../_service/formula/stocks-bonds-definition.service';

@Component({
  selector: 'app-pv-of-stock-with-constant-growth',
  templateUrl: './pv-of-stock-with-constant-growth.component.html',
  styleUrls: ['./pv-of-stock-with-constant-growth.component.scss']
})
export class PvOfStockWithConstantGrowthComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: StocksBondsFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getPvOfStockWithConstantGrowthDef();
  }

}
