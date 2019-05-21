import { BankingFormulaDefinitionService } from './../../../_service/formula/banking-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-interest',
  templateUrl: './simple-interest.component.html',
  styleUrls: ['./simple-interest.component.scss']
})
export class SimpleInterestComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: BankingFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getSimpleInterestDef();
  }

}
