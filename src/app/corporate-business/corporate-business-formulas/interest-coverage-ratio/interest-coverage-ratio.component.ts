import { CorporateFormulaDefinationService } from './../../../_service/formula/corporate-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest-coverage-ratio',
  templateUrl: './interest-coverage-ratio.component.html',
  styleUrls: ['./interest-coverage-ratio.component.scss']
})
export class InterestCoverageRatioComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: CorporateFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getInterestCoverageRatioDef();
  }

}
