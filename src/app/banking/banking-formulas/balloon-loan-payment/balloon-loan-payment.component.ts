import { BankingFormulaDefinitionService } from './../../../_service/formula/banking-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balloon-loan-payment',
  templateUrl: './balloon-loan-payment.component.html',
  styleUrls: ['./balloon-loan-payment.component.scss']
})
export class BalloonLoanPaymentComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: BankingFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getBalloonLoanPaymentDef();
  }

}
