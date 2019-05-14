import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-growing-annuity-payment',
  templateUrl: './growing-annuity-payment.component.html',
  styleUrls: ['./growing-annuity-payment.component.scss']
})
export class GrowingAnnuityPaymentComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
