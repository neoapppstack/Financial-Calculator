import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';

@Component({
  selector: 'app-doubling-time-continuous-compounding',
  templateUrl: './doubling-time-continuous-compounding.component.html',
  styleUrls: ['./doubling-time-continuous-compounding.component.scss']
})
export class DoublingTimeContinuousCompoundingComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: GeneralFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getDoublingTimeContinuousCompoundingDef();
  }

}
