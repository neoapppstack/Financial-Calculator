import { CorporateFormulaDefinitionService } from './../../../_service/formula/corporate-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-net-working-capital',
  templateUrl: './net-working-capital.component.html',
  styleUrls: ['./net-working-capital.component.scss']
})
export class NetWorkingCapitalComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: CorporateFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getNetWorkingCapitalDef();
  }

}
