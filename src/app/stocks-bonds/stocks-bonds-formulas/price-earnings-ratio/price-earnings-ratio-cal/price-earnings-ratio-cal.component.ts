import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-earnings-ratio-cal',
  templateUrl: './price-earnings-ratio-cal.component.html',
  styleUrls: ['./price-earnings-ratio-cal.component.scss']
})
export class PriceEarningsRatioCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
