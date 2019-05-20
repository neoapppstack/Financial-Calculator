import { FinancialMarketFormulaDefinationService } from './../../../_service/formula/financial-markets-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-real-rate-of-return',
  templateUrl: './real-rate-of-return.component.html',
  styleUrls: ['./real-rate-of-return.component.scss']
})
export class RealRateOfReturnComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: FinancialMarketFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getRealRateOfReturnDef();
  }

}
