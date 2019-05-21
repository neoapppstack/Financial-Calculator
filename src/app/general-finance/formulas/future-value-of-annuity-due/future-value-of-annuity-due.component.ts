import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';

@Component({
  selector: 'app-future-value-of-annuity-due',
  templateUrl: './future-value-of-annuity-due.component.html',
  styleUrls: ['./future-value-of-annuity-due.component.scss']
})
export class FutureValueOfAnnuityDueComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: GeneralFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getFutureValueOfAnnuityDueDef();
  }

}
