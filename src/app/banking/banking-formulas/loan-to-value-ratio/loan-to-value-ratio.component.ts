import { BankingFormulaDefinitionService } from './../../../_service/formula/banking-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-to-value-ratio',
  templateUrl: './loan-to-value-ratio.component.html',
  styleUrls: ['./loan-to-value-ratio.component.scss']
})
export class LoanToValueRatioComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: BankingFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getLoanToValueRatioDef();
  }

}
