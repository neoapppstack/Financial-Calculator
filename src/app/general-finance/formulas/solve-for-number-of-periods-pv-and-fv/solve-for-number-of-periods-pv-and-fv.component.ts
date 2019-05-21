import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solve-for-number-of-periods-pv-and-fv',
  templateUrl: './solve-for-number-of-periods-pv-and-fv.component.html',
  styleUrls: ['./solve-for-number-of-periods-pv-and-fv.component.scss']
})
export class SolveForNumberOfPeriodsPvAndFvComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: GeneralFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getSolveForNumberOfPeriodsPvAndFvDef();
  }

}
