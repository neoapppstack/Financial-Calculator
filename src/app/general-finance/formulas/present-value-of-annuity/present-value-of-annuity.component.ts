import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';

@Component({
  selector: 'app-present-value-of-annuity',
  templateUrl: './present-value-of-annuity.component.html',
  styleUrls: ['./present-value-of-annuity.component.scss']
})
export class PresentValueOfAnnuityComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: GeneralFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getPresentValueOfAnnuityDef();
  }

}
