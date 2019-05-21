import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weighted-average',
  templateUrl: './weighted-average.component.html',
  styleUrls: ['./weighted-average.component.scss']
})
export class WeightedAverageComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: GeneralFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getWeightedAverageDef();
  }

}
