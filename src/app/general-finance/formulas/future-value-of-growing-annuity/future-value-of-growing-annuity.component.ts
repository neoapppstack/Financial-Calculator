import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-future-value-of-growing-annuity',
  templateUrl: './future-value-of-growing-annuity.component.html',
  styleUrls: ['./future-value-of-growing-annuity.component.scss']
})
export class FutureValueOfGrowingAnnuityComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
