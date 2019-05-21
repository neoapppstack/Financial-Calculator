import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';

@Component({
  selector: 'app-no-of-periods-of-annuity-from-pv',
  templateUrl: './no-of-periods-of-annuity-from-pv.component.html',
  styleUrls: ['./no-of-periods-of-annuity-from-pv.component.scss']
})
export class NoOfPeriodsOfAnnuityFromPvComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: GeneralFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getNoOfPeriodsOfAnnuityFromPvDef();
  }

}
