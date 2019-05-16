import { GeneralFormulaDefinationService } from './../../../_service/formula/general-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solve-for-number-of-periods-pv-and-fv',
  templateUrl: './solve-for-number-of-periods-pv-and-fv.component.html',
  styleUrls: ['./solve-for-number-of-periods-pv-and-fv.component.scss']
})
export class SolveForNumberOfPeriodsPvAndFvComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: GeneralFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getSolveForNumberOfPeriodsPvAndFvDef();
  }

}
