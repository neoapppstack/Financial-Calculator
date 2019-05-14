import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-present-value-factor',
  templateUrl: './present-value-factor.component.html',
  styleUrls: ['./present-value-factor.component.scss']
})
export class PresentValueFactorComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
