import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-future-value-of-annuity',
  templateUrl: './future-value-of-annuity.component.html',
  styleUrls: ['./future-value-of-annuity.component.scss']
})
export class FutureValueOfAnnuityComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(private formulaDefinitionService: GeneralFormulaDefinitionService ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getFutureValueOfAnnuityDef();
  }

}
