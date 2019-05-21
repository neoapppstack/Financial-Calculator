import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weighted-average-cal',
  templateUrl: './weighted-average-cal.component.html',
  styleUrls: ['./weighted-average-cal.component.scss']
})
export class WeightedAverageCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
