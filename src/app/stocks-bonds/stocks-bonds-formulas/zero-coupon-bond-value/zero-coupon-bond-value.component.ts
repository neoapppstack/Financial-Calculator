import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinationService } from './../../../_service/formula/stocks-bonds-defination.service';

@Component({
  selector: 'app-zero-coupon-bond-value',
  templateUrl: './zero-coupon-bond-value.component.html',
  styleUrls: ['./zero-coupon-bond-value.component.scss']
})
export class ZeroCouponBondValueComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: StocksBondsFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getZeroCouponBondValueDef();
  }

}
