import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';

@Component({
  selector: 'app-present-value-of-annuity-due',
  templateUrl: './present-value-of-annuity-due.component.html',
  styleUrls: ['./present-value-of-annuity-due.component.scss']
})
export class PresentValueOfAnnuityDueComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: GeneralFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getPresentValueOfAnnuityDueDef();
  }

}
