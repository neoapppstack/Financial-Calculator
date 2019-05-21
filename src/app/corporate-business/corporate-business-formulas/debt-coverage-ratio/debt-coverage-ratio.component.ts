import { CorporateFormulaDefinationService } from './../../../_service/formula/corporate-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debt-coverage-ratio',
  templateUrl: './debt-coverage-ratio.component.html',
  styleUrls: ['./debt-coverage-ratio.component.scss']
})
export class DebtCoverageRatioComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: CorporateFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getDebtCoverageRatioDef();
  }

}
