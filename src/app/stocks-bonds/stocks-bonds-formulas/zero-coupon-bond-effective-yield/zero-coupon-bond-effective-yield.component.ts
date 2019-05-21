import { StocksBondsFormulaDefinationService } from './../../../_service/formula/stocks-bonds-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-zero-coupon-bond-effective-yield',
  templateUrl: './zero-coupon-bond-effective-yield.component.html',
  styleUrls: ['./zero-coupon-bond-effective-yield.component.scss']
})
export class ZeroCouponBondEffectiveYieldComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: StocksBondsFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getZeroCouponBondEffectiveYieldDef();
  }

}
