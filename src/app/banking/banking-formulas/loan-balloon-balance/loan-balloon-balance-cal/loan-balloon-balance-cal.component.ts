import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loan-balloon-balance-cal',
  templateUrl: './loan-balloon-balance-cal.component.html',
  styleUrls: ['./loan-balloon-balance-cal.component.scss']
})
export class LoanBalloonBalanceCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
