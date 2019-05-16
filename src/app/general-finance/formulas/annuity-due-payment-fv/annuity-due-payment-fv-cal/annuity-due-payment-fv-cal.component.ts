import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-annuity-due-payment-fv-cal',
  templateUrl: './annuity-due-payment-fv-cal.component.html',
  styleUrls: ['./annuity-due-payment-fv-cal.component.scss']
})
export class AnnuityDuePaymentFvCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
