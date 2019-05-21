import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-free-cash-flow-to-firm-cal',
  templateUrl: './free-cash-flow-to-firm-cal.component.html',
  styleUrls: ['./free-cash-flow-to-firm-cal.component.scss']
})
export class FreeCashFlowToFirmCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
