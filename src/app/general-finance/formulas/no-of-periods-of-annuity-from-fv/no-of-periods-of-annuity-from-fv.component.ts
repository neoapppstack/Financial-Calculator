import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-of-periods-of-annuity-from-fv',
  templateUrl: './no-of-periods-of-annuity-from-fv.component.html',
  styleUrls: ['./no-of-periods-of-annuity-from-fv.component.scss']
})
export class NoOfPeriodsOfAnnuityFromFVComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(private formulaDefinitionService: GeneralFormulaDefinitionService) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getNoOfPeriodsOfAnnuityFromFVComponentDef();
  }

}
