import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-yield-cal',
  templateUrl: './current-yield-cal.component.html',
  styleUrls: ['./current-yield-cal.component.scss']
})
export class CurrentYieldCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
