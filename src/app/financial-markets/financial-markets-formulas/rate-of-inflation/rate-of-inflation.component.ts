import { FinancialMarketFormulaDefinationService } from './../../../_service/formula/financial-markets-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-of-inflation',
  templateUrl: './rate-of-inflation.component.html',
  styleUrls: ['./rate-of-inflation.component.scss']
})
export class RateOfInflationComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: FinancialMarketFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getRateOfInflationDef()
  }

}
