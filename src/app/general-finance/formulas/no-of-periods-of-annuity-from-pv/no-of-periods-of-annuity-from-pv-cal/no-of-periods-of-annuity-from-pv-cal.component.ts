import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-of-periods-of-annuity-from-pv-cal',
  templateUrl: './no-of-periods-of-annuity-from-pv-cal.component.html',
  styleUrls: ['./no-of-periods-of-annuity-from-pv-cal.component.scss']
})
export class NoOfPeriodsOfAnnuityFromPvCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
