import { CorporateFormulaDefinitionService } from './../../../_service/formula/corporate-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest-coverage-ratio',
  templateUrl: './interest-coverage-ratio.component.html',
  styleUrls: ['./interest-coverage-ratio.component.scss']
})
export class InterestCoverageRatioComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: CorporateFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getInterestCoverageRatioDef();
  }

}
