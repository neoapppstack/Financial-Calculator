import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-holding-period-return-cal',
  templateUrl: './holding-period-return-cal.component.html',
  styleUrls: ['./holding-period-return-cal.component.scss']
})
export class HoldingPeriodReturnCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
