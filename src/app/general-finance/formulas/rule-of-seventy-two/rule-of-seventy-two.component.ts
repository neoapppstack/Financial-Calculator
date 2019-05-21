import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';

@Component({
  selector: 'app-rule-of-seventy-two',
  templateUrl: './rule-of-seventy-two.component.html',
  styleUrls: ['./rule-of-seventy-two.component.scss']
})
export class RuleOfSeventyTwoComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: GeneralFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getRuleOfSeventyTwoDef();
  }

}
