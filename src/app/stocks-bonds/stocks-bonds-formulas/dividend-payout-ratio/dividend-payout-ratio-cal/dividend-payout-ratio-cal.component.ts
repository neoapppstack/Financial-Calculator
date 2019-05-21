import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dividend-payout-ratio-cal',
  templateUrl: './dividend-payout-ratio-cal.component.html',
  styleUrls: ['./dividend-payout-ratio-cal.component.scss']
})
export class DividendPayoutRatioCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
