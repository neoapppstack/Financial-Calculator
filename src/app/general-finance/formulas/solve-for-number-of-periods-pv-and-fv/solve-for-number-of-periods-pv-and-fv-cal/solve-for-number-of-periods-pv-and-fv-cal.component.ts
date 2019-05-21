import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solve-for-number-of-periods-pv-and-fv-cal',
  templateUrl: './solve-for-number-of-periods-pv-and-fv-cal.component.html',
  styleUrls: ['./solve-for-number-of-periods-pv-and-fv-cal.component.scss']
})
export class SolveForNumberOfPeriodsPvAndFvCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
