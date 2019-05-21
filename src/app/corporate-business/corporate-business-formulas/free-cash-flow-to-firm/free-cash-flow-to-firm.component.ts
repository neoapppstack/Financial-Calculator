import { CorporateFormulaDefinitionService } from './../../../_service/formula/corporate-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-cash-flow-to-firm',
  templateUrl: './free-cash-flow-to-firm.component.html',
  styleUrls: ['./free-cash-flow-to-firm.component.scss']
})
export class FreeCashFlowToFirmComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: CorporateFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getFreeCashFlowToEquityDef();
  }

}
