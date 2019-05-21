import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';

@Component({
  selector: 'app-future-value-continuous-compounding',
  templateUrl: './future-value-continuous-compounding.component.html',
  styleUrls: ['./future-value-continuous-compounding.component.scss']
})
export class FutureValueContinuousCompoundingComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: GeneralFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getFutureValueContinuousCompoundingDef();
  }

}
