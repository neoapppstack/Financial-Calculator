import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-future-value-of-annuity-due-cal',
  templateUrl: './future-value-of-annuity-due-cal.component.html',
  styleUrls: ['./future-value-of-annuity-due-cal.component.scss']
})
export class FutureValueOfAnnuityDueCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
