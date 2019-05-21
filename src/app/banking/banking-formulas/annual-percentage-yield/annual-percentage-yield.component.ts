import { BankingFormulaDefinitionService } from './../../../_service/formula/banking-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annual-percentage-yield',
  templateUrl: './annual-percentage-yield.component.html',
  styleUrls: ['./annual-percentage-yield.component.scss']
})
export class AnnualPercentageYieldComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: BankingFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getAnnualPercentageYieldDef();
  }

}
