import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-present-value-of-annuity',
  templateUrl: './present-value-of-annuity.component.html',
  styleUrls: ['./present-value-of-annuity.component.scss']
})
export class PresentValueOfAnnuityComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
