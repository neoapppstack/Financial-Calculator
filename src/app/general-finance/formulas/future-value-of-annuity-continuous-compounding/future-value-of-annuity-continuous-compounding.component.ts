import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-future-value-of-annuity-continuous-compounding',
  templateUrl: './future-value-of-annuity-continuous-compounding.component.html',
  styleUrls: ['./future-value-of-annuity-continuous-compounding.component.scss']
})
export class FutureValueOfAnnuityContinuousCompoundingComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(private formulaDefinitionService: GeneralFormulaDefinitionService) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getFutureValueOfAnnuityContinuousCompoundingDef();
  }

}
