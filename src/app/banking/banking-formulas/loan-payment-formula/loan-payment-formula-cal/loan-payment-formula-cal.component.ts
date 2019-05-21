import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loan-payment-formula-cal',
  templateUrl: './loan-payment-formula-cal.component.html',
  styleUrls: ['./loan-payment-formula-cal.component.scss']
})
export class LoanPaymentFormulaCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
