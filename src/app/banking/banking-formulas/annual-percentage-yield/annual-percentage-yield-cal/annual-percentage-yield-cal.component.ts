import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-annual-percentage-yield-cal',
  templateUrl: './annual-percentage-yield-cal.component.html',
  styleUrls: ['./annual-percentage-yield-cal.component.scss']
})
export class AnnualPercentageYieldCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
