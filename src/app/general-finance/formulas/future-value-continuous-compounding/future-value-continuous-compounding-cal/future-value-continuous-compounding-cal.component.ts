import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-future-value-continuous-compounding-cal',
  templateUrl: './future-value-continuous-compounding-cal.component.html',
  styleUrls: ['./future-value-continuous-compounding-cal.component.scss']
})
export class FutureValueContinuousCompoundingCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
