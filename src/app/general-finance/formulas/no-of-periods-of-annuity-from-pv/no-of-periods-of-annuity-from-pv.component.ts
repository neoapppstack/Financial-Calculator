import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-no-of-periods-of-annuity-from-pv',
  templateUrl: './no-of-periods-of-annuity-from-pv.component.html',
  styleUrls: ['./no-of-periods-of-annuity-from-pv.component.scss']
})
export class NoOfPeriodsOfAnnuityFromPvComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
