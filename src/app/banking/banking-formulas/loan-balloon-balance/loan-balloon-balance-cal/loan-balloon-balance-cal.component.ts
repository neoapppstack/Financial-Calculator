import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loan-balloon-balance-cal',
  templateUrl: './loan-balloon-balance-cal.component.html',
  styleUrls: ['./loan-balloon-balance-cal.component.scss']
})
export class LoanBalloonBalanceCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
