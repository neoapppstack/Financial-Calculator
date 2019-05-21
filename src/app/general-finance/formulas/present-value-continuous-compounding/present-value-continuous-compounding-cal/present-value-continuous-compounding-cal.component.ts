import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-present-value-continuous-compounding-cal',
  templateUrl: './present-value-continuous-compounding-cal.component.html',
  styleUrls: ['./present-value-continuous-compounding-cal.component.scss']
})
export class PresentValueContinuousCompoundingCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
