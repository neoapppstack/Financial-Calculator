import { BankingFormulaDefinitionService } from './../../../_service/formula/banking-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-balloon-balance',
  templateUrl: './loan-balloon-balance.component.html',
  styleUrls: ['./loan-balloon-balance.component.scss']
})
export class LoanBalloonBalanceComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: BankingFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getLoanBalloonBalanceDef();
  }

}
