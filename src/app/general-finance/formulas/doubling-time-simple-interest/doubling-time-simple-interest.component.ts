import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';

@Component({
  selector: 'app-doubling-time-simple-interest',
  templateUrl: './doubling-time-simple-interest.component.html',
  styleUrls: ['./doubling-time-simple-interest.component.scss']
})
export class DoublingTimeSimpleInterestComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: GeneralFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getDoublingTimeSimpleInterestDef();
  }

}
