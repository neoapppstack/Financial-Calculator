import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-present-value-of-annuity-cal',
  templateUrl: './present-value-of-annuity-cal.component.html',
  styleUrls: ['./present-value-of-annuity-cal.component.scss']
})
export class PresentValueOfAnnuityCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
