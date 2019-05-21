import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dividend-yield-cal',
  templateUrl: './dividend-yield-cal.component.html',
  styleUrls: ['./dividend-yield-cal.component.scss']
})
export class DividendYieldCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
