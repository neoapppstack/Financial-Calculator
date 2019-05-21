import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-receivables-turnover-ratio-cal',
  templateUrl: './receivables-turnover-ratio-cal.component.html',
  styleUrls: ['./receivables-turnover-ratio-cal.component.scss']
})
export class ReceivablesTurnoverRatioCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
