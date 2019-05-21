import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-remaining-balance-formula-cal',
  templateUrl: './remaining-balance-formula-cal.component.html',
  styleUrls: ['./remaining-balance-formula-cal.component.scss']
})
export class RemainingBalanceFormulaCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
