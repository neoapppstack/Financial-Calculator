import { BankingFormulaDefinitionService } from './../../../_service/formula/banking-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continuous-compounding',
  templateUrl: './continuous-compounding.component.html',
  styleUrls: ['./continuous-compounding.component.scss']
})
export class ContinuousCompoundingComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: BankingFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getContinuousCompoundingDef();
  }

}
