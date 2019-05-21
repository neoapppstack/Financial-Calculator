import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';

@Component({
  selector: 'app-future-value-factor',
  templateUrl: './future-value-factor.component.html',
  styleUrls: ['./future-value-factor.component.scss']
})
export class FutureValueFactorComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: GeneralFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getFutureValueFactorDef();
  }

}
