import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-remaining-balance-formula-cal',
  templateUrl: './remaining-balance-formula-cal.component.html',
  styleUrls: ['./remaining-balance-formula-cal.component.scss']
})
export class RemainingBalanceFormulaCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
