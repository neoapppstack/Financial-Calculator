import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-annuity-due-payment-pv-cal',
  templateUrl: './annuity-due-payment-pv-cal.component.html',
  styleUrls: ['./annuity-due-payment-pv-cal.component.scss']
})
export class AnnuityDuePaymentPvCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
