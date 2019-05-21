import { BankingFormulaDefinitionService } from './../../../_service/formula/banking-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-payment-formula',
  templateUrl: './loan-payment-formula.component.html',
  styleUrls: ['./loan-payment-formula.component.scss']
})
export class LoanPaymentFormulaComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: BankingFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getLoanPaymentFormulaDef();
  }

}
