import { BankingFormulaDefinationService } from './../../../_service/formula/banking-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-to-deposit-ratio',
  templateUrl: './loan-to-deposit-ratio.component.html',
  styleUrls: ['./loan-to-deposit-ratio.component.scss']
})
export class LoanToDepositRatioComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: BankingFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getLoanToDepositRatioDef();
  }

}
