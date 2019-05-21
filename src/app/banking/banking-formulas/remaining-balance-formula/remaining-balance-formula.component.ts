import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { BankingFormulaDefinitionService } from './../../../_service/formula/banking-formula-definition.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remaining-balance-formula',
  templateUrl: './remaining-balance-formula.component.html',
  styleUrls: ['./remaining-balance-formula.component.scss']
})
export class RemainingBalanceFormulaComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: BankingFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getRemainingBalanceFormulaDef();
  }

}
