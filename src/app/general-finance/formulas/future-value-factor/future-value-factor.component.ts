import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-future-value-factor',
  templateUrl: './future-value-factor.component.html',
  styleUrls: ['./future-value-factor.component.scss']
})
export class FutureValueFactorComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
