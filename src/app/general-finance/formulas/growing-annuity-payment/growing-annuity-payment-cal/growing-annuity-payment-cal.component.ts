import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-growing-annuity-payment-cal',
  templateUrl: './growing-annuity-payment-cal.component.html',
  styleUrls: ['./growing-annuity-payment-cal.component.scss']
})
export class GrowingAnnuityPaymentCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
