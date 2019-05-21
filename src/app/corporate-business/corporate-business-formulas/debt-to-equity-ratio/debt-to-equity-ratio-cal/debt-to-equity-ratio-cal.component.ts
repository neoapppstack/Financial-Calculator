import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-debt-to-equity-ratio-cal',
  templateUrl: './debt-to-equity-ratio-cal.component.html',
  styleUrls: ['./debt-to-equity-ratio-cal.component.scss']
})
export class DebtToEquityRatioCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
