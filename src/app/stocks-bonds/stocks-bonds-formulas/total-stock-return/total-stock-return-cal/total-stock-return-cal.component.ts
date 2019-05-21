import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total-stock-return-cal',
  templateUrl: './total-stock-return-cal.component.html',
  styleUrls: ['./total-stock-return-cal.component.scss']
})
export class TotalStockReturnCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
