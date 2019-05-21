import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-debt-ratio-cal',
  templateUrl: './debt-ratio-cal.component.html',
  styleUrls: ['./debt-ratio-cal.component.scss']
})
export class DebtRatioCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
