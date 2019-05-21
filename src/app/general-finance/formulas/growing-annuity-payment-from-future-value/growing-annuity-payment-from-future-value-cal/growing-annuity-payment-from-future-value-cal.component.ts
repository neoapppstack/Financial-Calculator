import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-growing-annuity-payment-from-future-value-cal',
  templateUrl: './growing-annuity-payment-from-future-value-cal.component.html',
  styleUrls: ['./growing-annuity-payment-from-future-value-cal.component.scss']
})
export class GrowingAnnuityPaymentFromFutureValueCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
