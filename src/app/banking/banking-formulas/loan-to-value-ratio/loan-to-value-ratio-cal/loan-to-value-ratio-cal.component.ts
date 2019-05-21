import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loan-to-value-ratio-cal',
  templateUrl: './loan-to-value-ratio-cal.component.html',
  styleUrls: ['./loan-to-value-ratio-cal.component.scss']
})
export class LoanToValueRatioCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
