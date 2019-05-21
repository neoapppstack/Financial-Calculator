import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-receivables-turnover-ratio-cal',
  templateUrl: './receivables-turnover-ratio-cal.component.html',
  styleUrls: ['./receivables-turnover-ratio-cal.component.scss']
})
export class ReceivablesTurnoverRatioCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
