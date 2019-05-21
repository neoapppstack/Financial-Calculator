import { BankingFormulaDefinationService } from './../../../_service/formula/banking-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-to-value-ratio',
  templateUrl: './loan-to-value-ratio.component.html',
  styleUrls: ['./loan-to-value-ratio.component.scss']
})
export class LoanToValueRatioComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: BankingFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getLoanToValueRatioDef();
  }

}
