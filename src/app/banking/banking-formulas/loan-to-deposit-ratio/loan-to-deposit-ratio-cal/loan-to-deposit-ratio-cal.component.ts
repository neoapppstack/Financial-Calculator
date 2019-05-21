import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loan-to-deposit-ratio-cal',
  templateUrl: './loan-to-deposit-ratio-cal.component.html',
  styleUrls: ['./loan-to-deposit-ratio-cal.component.scss']
})
export class LoanToDepositRatioCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
