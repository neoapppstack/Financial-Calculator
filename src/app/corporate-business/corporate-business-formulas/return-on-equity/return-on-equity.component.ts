import { CorporateFormulaDefinitionService } from './../../../_service/formula/corporate-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-on-equity',
  templateUrl: './return-on-equity.component.html',
  styleUrls: ['./return-on-equity.component.scss']
})
export class ReturnOnEquityComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: CorporateFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getReturnOnEquityDef();
  }

}
