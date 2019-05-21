import { BankingFormulaDefinationService } from './../../../_service/formula/banking-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-payment-formula',
  templateUrl: './loan-payment-formula.component.html',
  styleUrls: ['./loan-payment-formula.component.scss']
})
export class LoanPaymentFormulaComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: BankingFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getLoanPaymentFormulaDef();
  }

}
