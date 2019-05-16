import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-present-value-annuity-factor-cal',
  templateUrl: './present-value-annuity-factor-cal.component.html',
  styleUrls: ['./present-value-annuity-factor-cal.component.scss']
})
export class PresentValueAnnuityFactorCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
