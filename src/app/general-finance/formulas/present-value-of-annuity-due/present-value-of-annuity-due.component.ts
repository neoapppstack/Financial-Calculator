import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-present-value-of-annuity-due',
  templateUrl: './present-value-of-annuity-due.component.html',
  styleUrls: ['./present-value-of-annuity-due.component.scss']
})
export class PresentValueOfAnnuityDueComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
