import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-to-book-value-cal',
  templateUrl: './price-to-book-value-cal.component.html',
  styleUrls: ['./price-to-book-value-cal.component.scss']
})
export class PriceToBookValueCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
