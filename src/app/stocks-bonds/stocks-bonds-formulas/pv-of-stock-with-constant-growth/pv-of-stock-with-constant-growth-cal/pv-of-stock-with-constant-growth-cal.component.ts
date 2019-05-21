import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pv-of-stock-with-constant-growth-cal',
  templateUrl: './pv-of-stock-with-constant-growth-cal.component.html',
  styleUrls: ['./pv-of-stock-with-constant-growth-cal.component.scss']
})
export class PvOfStockWithConstantGrowthCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
