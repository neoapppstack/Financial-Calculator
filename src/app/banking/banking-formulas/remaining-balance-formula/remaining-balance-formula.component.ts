import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { BankingFormulaDefinationService } from './../../../_service/formula/banking-formula-defination.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remaining-balance-formula',
  templateUrl: './remaining-balance-formula.component.html',
  styleUrls: ['./remaining-balance-formula.component.scss']
})
export class RemainingBalanceFormulaComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: BankingFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getRemainingBalanceFormulaDef();
  }

}
