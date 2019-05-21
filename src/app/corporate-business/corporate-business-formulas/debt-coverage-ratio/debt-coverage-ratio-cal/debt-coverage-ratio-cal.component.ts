import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-debt-coverage-ratio-cal',
  templateUrl: './debt-coverage-ratio-cal.component.html',
  styleUrls: ['./debt-coverage-ratio-cal.component.scss']
})
export class DebtCoverageRatioCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
