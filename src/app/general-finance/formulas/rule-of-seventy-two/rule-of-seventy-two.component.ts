import { GeneralFormulaDefinationService } from './../../../_service/formula/general-formula-defination.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-rule-of-seventy-two',
  templateUrl: './rule-of-seventy-two.component.html',
  styleUrls: ['./rule-of-seventy-two.component.scss']
})
export class RuleOfSeventyTwoComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: GeneralFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getRuleOfSeventyTwoDef();
  }

}
