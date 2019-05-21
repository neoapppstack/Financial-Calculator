import { BankingFormulaDefinitionService } from './../../../_service/formula/banking-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debt-to-income-ratio',
  templateUrl: './debt-to-income-ratio.component.html',
  styleUrls: ['./debt-to-income-ratio.component.scss']
})
export class DebtToIncomeRatioComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: BankingFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getDebtToIncomeRatioDef();
  }

}
