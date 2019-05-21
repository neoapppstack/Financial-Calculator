import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-to-sales-ratio-cal',
  templateUrl: './price-to-sales-ratio-cal.component.html',
  styleUrls: ['./price-to-sales-ratio-cal.component.scss']
})
export class PriceToSalesRatioCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
