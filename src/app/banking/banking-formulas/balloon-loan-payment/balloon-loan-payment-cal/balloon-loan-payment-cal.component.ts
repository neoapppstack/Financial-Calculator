import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-balloon-loan-payment-cal',
  templateUrl: './balloon-loan-payment-cal.component.html',
  styleUrls: ['./balloon-loan-payment-cal.component.scss']
})
export class BalloonLoanPaymentCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
