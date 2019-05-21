import { CorporateFormulaDefinitionService } from './../../../_service/formula/corporate-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debt-to-equity-ratio',
  templateUrl: './debt-to-equity-ratio.component.html',
  styleUrls: ['./debt-to-equity-ratio.component.scss']
})
export class DebtToEquityRatioComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: CorporateFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getDebtToEquityRatioDef();
  }

}
