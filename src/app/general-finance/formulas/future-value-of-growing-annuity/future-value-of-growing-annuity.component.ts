import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';

@Component({
  selector: 'app-future-value-of-growing-annuity',
  templateUrl: './future-value-of-growing-annuity.component.html',
  styleUrls: ['./future-value-of-growing-annuity.component.scss']
})
export class FutureValueOfGrowingAnnuityComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: GeneralFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getFutureValueOfGrowingAnnuityDef();
  }

}
