import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-present-value-factor-cal',
  templateUrl: './present-value-factor-cal.component.html',
  styleUrls: ['./present-value-factor-cal.component.scss']
})
export class PresentValueFactorCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
