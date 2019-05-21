import { BankingFormulaDefinationService } from './../../../_service/formula/banking-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debt-to-income-ratio',
  templateUrl: './debt-to-income-ratio.component.html',
  styleUrls: ['./debt-to-income-ratio.component.scss']
})
export class DebtToIncomeRatioComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: BankingFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getDebtToIncomeRatioDef();
  }

}
