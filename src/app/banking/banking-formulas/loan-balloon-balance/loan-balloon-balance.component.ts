import { BankingFormulaDefinationService } from './../../../_service/formula/banking-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-balloon-balance',
  templateUrl: './loan-balloon-balance.component.html',
  styleUrls: ['./loan-balloon-balance.component.scss']
})
export class LoanBalloonBalanceComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: BankingFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getLoanBalloonBalanceDef();
  }

}
