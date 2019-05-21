import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loan-to-value-ratio-cal',
  templateUrl: './loan-to-value-ratio-cal.component.html',
  styleUrls: ['./loan-to-value-ratio-cal.component.scss']
})
export class LoanToValueRatioCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
