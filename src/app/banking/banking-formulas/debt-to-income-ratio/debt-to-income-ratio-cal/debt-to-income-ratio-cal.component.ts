import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-debt-to-income-ratio-cal',
  templateUrl: './debt-to-income-ratio-cal.component.html',
  styleUrls: ['./debt-to-income-ratio-cal.component.scss']
})
export class DebtToIncomeRatioCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
