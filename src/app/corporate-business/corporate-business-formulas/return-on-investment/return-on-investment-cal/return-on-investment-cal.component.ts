import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-return-on-investment-cal',
  templateUrl: './return-on-investment-cal.component.html',
  styleUrls: ['./return-on-investment-cal.component.scss']
})
export class ReturnOnInvestmentCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
