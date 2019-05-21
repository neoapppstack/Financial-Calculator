import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-debt-to-income-ratio-cal',
  templateUrl: './debt-to-income-ratio-cal.component.html',
  styleUrls: ['./debt-to-income-ratio-cal.component.scss']
})
export class DebtToIncomeRatioCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
