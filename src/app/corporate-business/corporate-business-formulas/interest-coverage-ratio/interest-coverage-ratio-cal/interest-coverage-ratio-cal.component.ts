import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interest-coverage-ratio-cal',
  templateUrl: './interest-coverage-ratio-cal.component.html',
  styleUrls: ['./interest-coverage-ratio-cal.component.scss']
})
export class InterestCoverageRatioCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
