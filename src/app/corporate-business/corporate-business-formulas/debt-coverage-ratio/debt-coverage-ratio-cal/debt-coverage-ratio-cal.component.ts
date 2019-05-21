import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-debt-coverage-ratio-cal',
  templateUrl: './debt-coverage-ratio-cal.component.html',
  styleUrls: ['./debt-coverage-ratio-cal.component.scss']
})
export class DebtCoverageRatioCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
