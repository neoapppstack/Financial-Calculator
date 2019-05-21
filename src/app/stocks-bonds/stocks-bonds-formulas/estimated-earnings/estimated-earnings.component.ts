import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinitionService } from '../../../_service/formula/stocks-bonds-definition.service';

@Component({
  selector: 'app-estimated-earnings',
  templateUrl: './estimated-earnings.component.html',
  styleUrls: ['./estimated-earnings.component.scss']
})
export class EstimatedEarningsComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: StocksBondsFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getEstimatedEarningsDef();
  }

}
