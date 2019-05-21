import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-to-book-value-cal',
  templateUrl: './price-to-book-value-cal.component.html',
  styleUrls: ['./price-to-book-value-cal.component.scss']
})
export class PriceToBookValueCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
