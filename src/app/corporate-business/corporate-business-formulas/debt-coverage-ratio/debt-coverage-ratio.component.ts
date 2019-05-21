import { CorporateFormulaDefinitionService } from './../../../_service/formula/corporate-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debt-coverage-ratio',
  templateUrl: './debt-coverage-ratio.component.html',
  styleUrls: ['./debt-coverage-ratio.component.scss']
})
export class DebtCoverageRatioComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: CorporateFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getDebtCoverageRatioDef();
  }

}
