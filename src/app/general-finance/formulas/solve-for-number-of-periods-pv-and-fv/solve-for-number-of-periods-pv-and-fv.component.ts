import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solve-for-number-of-periods-pv-and-fv',
  templateUrl: './solve-for-number-of-periods-pv-and-fv.component.html',
  styleUrls: ['./solve-for-number-of-periods-pv-and-fv.component.scss']
})
export class SolveForNumberOfPeriodsPvAndFvComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
