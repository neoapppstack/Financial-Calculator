import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-return-on-investment-cal',
  templateUrl: './return-on-investment-cal.component.html',
  styleUrls: ['./return-on-investment-cal.component.scss']
})
export class ReturnOnInvestmentCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
