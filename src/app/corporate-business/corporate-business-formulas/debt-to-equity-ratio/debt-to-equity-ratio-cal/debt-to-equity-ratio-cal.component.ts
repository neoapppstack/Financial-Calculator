import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-debt-to-equity-ratio-cal',
  templateUrl: './debt-to-equity-ratio-cal.component.html',
  styleUrls: ['./debt-to-equity-ratio-cal.component.scss']
})
export class DebtToEquityRatioCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
