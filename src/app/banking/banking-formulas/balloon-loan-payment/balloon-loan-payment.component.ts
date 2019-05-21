import { BankingFormulaDefinationService } from './../../../_service/formula/banking-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balloon-loan-payment',
  templateUrl: './balloon-loan-payment.component.html',
  styleUrls: ['./balloon-loan-payment.component.scss']
})
export class BalloonLoanPaymentComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: BankingFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getBalloonLoanPaymentDef();
  }

}
