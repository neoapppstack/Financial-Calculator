import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zero-coupon-bond-effective-yield-cal',
  templateUrl: './zero-coupon-bond-effective-yield-cal.component.html',
  styleUrls: ['./zero-coupon-bond-effective-yield-cal.component.scss']
})
export class ZeroCouponBondEffectiveYieldCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
