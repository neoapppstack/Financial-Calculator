import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-annuity-due-payment-fv',
  templateUrl: './annuity-due-payment-fv.component.html',
  styleUrls: ['./annuity-due-payment-fv.component.scss']
})
export class AnnuityDuePaymentFvComponent implements OnInit {


  formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
