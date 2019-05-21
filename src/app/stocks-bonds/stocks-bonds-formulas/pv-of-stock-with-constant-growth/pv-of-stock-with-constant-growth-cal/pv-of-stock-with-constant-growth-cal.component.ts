import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pv-of-stock-with-constant-growth-cal',
  templateUrl: './pv-of-stock-with-constant-growth-cal.component.html',
  styleUrls: ['./pv-of-stock-with-constant-growth-cal.component.scss']
})
export class PvOfStockWithConstantGrowthCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
