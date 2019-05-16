import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-growing-annuity-payment-cal',
  templateUrl: './growing-annuity-payment-cal.component.html',
  styleUrls: ['./growing-annuity-payment-cal.component.scss']
})
export class GrowingAnnuityPaymentCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
