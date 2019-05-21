import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-future-value-cal',
  templateUrl: './future-value-cal.component.html',
  styleUrls: ['./future-value-cal.component.scss']
})
export class FutureValueCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
