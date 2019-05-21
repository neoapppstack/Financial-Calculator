import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-free-cash-flow-to-equity-cal',
  templateUrl: './free-cash-flow-to-equity-cal.component.html',
  styleUrls: ['./free-cash-flow-to-equity-cal.component.scss']
})
export class FreeCashFlowToEquityCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
