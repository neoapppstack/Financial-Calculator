import { CorporateFormulaDefinationService } from './../../../_service/formula/corporate-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debt-to-equity-ratio',
  templateUrl: './debt-to-equity-ratio.component.html',
  styleUrls: ['./debt-to-equity-ratio.component.scss']
})
export class DebtToEquityRatioComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: CorporateFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getDebtToEquityRatioDef();
  }

}
