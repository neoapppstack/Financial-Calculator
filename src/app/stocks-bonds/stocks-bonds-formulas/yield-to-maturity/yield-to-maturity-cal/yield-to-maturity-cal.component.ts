import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-yield-to-maturity-cal',
  templateUrl: './yield-to-maturity-cal.component.html',
  styleUrls: ['./yield-to-maturity-cal.component.scss']
})
export class YieldToMaturityCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
