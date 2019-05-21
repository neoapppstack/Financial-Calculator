import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinitionService } from '../../../_service/formula/stocks-bonds-definition.service';

@Component({
  selector: 'app-zero-coupon-bond-value',
  templateUrl: './zero-coupon-bond-value.component.html',
  styleUrls: ['./zero-coupon-bond-value.component.scss']
})
export class ZeroCouponBondValueComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: StocksBondsFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getZeroCouponBondValueDef();
  }

}
