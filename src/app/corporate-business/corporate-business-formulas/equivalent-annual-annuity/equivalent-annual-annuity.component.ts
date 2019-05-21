import { CorporateFormulaDefinitionService } from './../../../_service/formula/corporate-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equivalent-annual-annuity',
  templateUrl: './equivalent-annual-annuity.component.html',
  styleUrls: ['./equivalent-annual-annuity.component.scss']
})
export class EquivalentAnnualAnnuityComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: CorporateFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getEquivalentAnnualAnnuityDef();
  }

}
