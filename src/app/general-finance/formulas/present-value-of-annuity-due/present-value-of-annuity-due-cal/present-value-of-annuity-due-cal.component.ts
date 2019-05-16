import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-present-value-of-annuity-due-cal',
  templateUrl: './present-value-of-annuity-due-cal.component.html',
  styleUrls: ['./present-value-of-annuity-due-cal.component.scss']
})
export class PresentValueOfAnnuityDueCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
