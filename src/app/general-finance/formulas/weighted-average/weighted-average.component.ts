import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weighted-average',
  templateUrl: './weighted-average.component.html',
  styleUrls: ['./weighted-average.component.scss']
})
export class WeightedAverageComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
