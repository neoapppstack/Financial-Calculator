import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-growing-annuity-payment-from-future-value-cal',
  templateUrl: './growing-annuity-payment-from-future-value-cal.component.html',
  styleUrls: ['./growing-annuity-payment-from-future-value-cal.component.scss']
})
export class GrowingAnnuityPaymentFromFutureValueCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
