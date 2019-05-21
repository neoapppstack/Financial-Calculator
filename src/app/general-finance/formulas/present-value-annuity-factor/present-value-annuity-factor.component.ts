import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';

@Component({
  selector: 'app-present-value-annuity-factor',
  templateUrl: './present-value-annuity-factor.component.html',
  styleUrls: ['./present-value-annuity-factor.component.scss']
})
export class PresentValueAnnuityFactorComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: GeneralFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getPresentValueAnnuityFactorDef();
  }

}
