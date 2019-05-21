import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preferred-stock-cal',
  templateUrl: './preferred-stock-cal.component.html',
  styleUrls: ['./preferred-stock-cal.component.scss']
})
export class PreferredStockCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
