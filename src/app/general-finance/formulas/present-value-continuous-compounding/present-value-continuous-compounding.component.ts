import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';

@Component({
  selector: 'app-present-value-continuous-compounding',
  templateUrl: './present-value-continuous-compounding.component.html',
  styleUrls: ['./present-value-continuous-compounding.component.scss']
})
export class PresentValueContinuousCompoundingComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: GeneralFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getPresentValueContinuousCompoundingDef();
  }

}
