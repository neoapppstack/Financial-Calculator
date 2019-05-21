import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-present-value-cal',
  templateUrl: './present-value-cal.component.html',
  styleUrls: ['./present-value-cal.component.scss']
})
export class PresentValueCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
