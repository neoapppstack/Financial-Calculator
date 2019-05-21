import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-discounted-payback-period-cal',
  templateUrl: './discounted-payback-period-cal.component.html',
  styleUrls: ['./discounted-payback-period-cal.component.scss']
})
export class DiscountedPaybackPeriodCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
