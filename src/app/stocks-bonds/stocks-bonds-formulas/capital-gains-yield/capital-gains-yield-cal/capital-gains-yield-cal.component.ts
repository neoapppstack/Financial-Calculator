import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-capital-gains-yield-cal',
  templateUrl: './capital-gains-yield-cal.component.html',
  styleUrls: ['./capital-gains-yield-cal.component.scss']
})
export class CapitalGainsYieldCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
