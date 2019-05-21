import { CorporateFormulaDefinitionService } from './../../../_service/formula/corporate-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribution-margin',
  templateUrl: './contribution-margin.component.html',
  styleUrls: ['./contribution-margin.component.scss']
})
export class ContributionMarginComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: CorporateFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getContributionMarginDef();
  }

}
