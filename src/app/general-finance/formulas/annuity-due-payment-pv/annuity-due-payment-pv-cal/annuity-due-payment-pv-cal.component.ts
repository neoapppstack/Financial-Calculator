import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-annuity-due-payment-pv-cal',
  templateUrl: './annuity-due-payment-pv-cal.component.html',
  styleUrls: ['./annuity-due-payment-pv-cal.component.scss']
})
export class AnnuityDuePaymentPvCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
