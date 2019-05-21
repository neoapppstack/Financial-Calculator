import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payback-period-cal',
  templateUrl: './payback-period-cal.component.html',
  styleUrls: ['./payback-period-cal.component.scss']
})
export class PaybackPeriodCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
