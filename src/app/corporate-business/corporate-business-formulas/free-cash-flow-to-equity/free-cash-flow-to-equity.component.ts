import { CorporateFormulaDefinitionService } from './../../../_service/formula/corporate-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-cash-flow-to-equity',
  templateUrl: './free-cash-flow-to-equity.component.html',
  styleUrls: ['./free-cash-flow-to-equity.component.scss']
})
export class FreeCashFlowToEquityComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: CorporateFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getFreeCashFlowToEquityDef();
  }

}
