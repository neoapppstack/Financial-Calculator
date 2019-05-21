import { BankingFormulaDefinitionService } from './../../../_service/formula/banking-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-to-deposit-ratio',
  templateUrl: './loan-to-deposit-ratio.component.html',
  styleUrls: ['./loan-to-deposit-ratio.component.scss']
})
export class LoanToDepositRatioComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: BankingFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getLoanToDepositRatioDef();
  }

}
