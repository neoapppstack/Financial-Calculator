import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-present-value-continuous-compounding',
  templateUrl: './present-value-continuous-compounding.component.html',
  styleUrls: ['./present-value-continuous-compounding.component.scss']
})
export class PresentValueContinuousCompoundingComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
