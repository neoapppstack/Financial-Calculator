import { CorporateFormulaDefinationService } from './../../../_service/formula/corporate-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discounted-payback-period',
  templateUrl: './discounted-payback-period.component.html',
  styleUrls: ['./discounted-payback-period.component.scss']
})
export class DiscountedPaybackPeriodComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: CorporateFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getDiscountedPaybackPeriodDef();
  }

}
