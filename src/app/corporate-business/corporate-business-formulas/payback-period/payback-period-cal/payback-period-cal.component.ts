import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payback-period-cal',
  templateUrl: './payback-period-cal.component.html',
  styleUrls: ['./payback-period-cal.component.scss']
})
export class PaybackPeriodCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
