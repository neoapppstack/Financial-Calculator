import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zero-coupon-bond-value-cal',
  templateUrl: './zero-coupon-bond-value-cal.component.html',
  styleUrls: ['./zero-coupon-bond-value-cal.component.scss']
})
export class ZeroCouponBondValueCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
