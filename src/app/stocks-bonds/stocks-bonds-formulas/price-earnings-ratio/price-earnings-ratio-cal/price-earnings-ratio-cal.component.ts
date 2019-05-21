import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-earnings-ratio-cal',
  templateUrl: './price-earnings-ratio-cal.component.html',
  styleUrls: ['./price-earnings-ratio-cal.component.scss']
})
export class PriceEarningsRatioCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
