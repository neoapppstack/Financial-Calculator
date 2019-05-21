import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';

@Component({
  selector: 'app-average-collection-period',
  templateUrl: './average-collection-period.component.html',
  styleUrls: ['./average-collection-period.component.scss']
})
export class AverageCollectionPeriodComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(private formulaDefinitionService: GeneralFormulaDefinitionService) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getAverageCollectionPeriodDef();
  }

}
