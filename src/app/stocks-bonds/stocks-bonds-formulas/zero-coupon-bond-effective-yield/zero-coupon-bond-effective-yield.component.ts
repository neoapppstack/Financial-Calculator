import { StocksBondsFormulaDefinitionService } from '../../../_service/formula/stocks-bonds-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-zero-coupon-bond-effective-yield',
  templateUrl: './zero-coupon-bond-effective-yield.component.html',
  styleUrls: ['./zero-coupon-bond-effective-yield.component.scss']
})
export class ZeroCouponBondEffectiveYieldComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: StocksBondsFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getZeroCouponBondEffectiveYieldDef();
  }

}
