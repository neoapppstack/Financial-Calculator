import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dividend-payout-ratio-cal',
  templateUrl: './dividend-payout-ratio-cal.component.html',
  styleUrls: ['./dividend-payout-ratio-cal.component.scss']
})
export class DividendPayoutRatioCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
