import { CorporateFormulaDefinitionService } from './../../../_service/formula/corporate-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-turnover-ratio',
  templateUrl: './inventory-turnover-ratio.component.html',
  styleUrls: ['./inventory-turnover-ratio.component.scss']
})
export class InventoryTurnoverRatioComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: CorporateFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getInventoryTurnoverRatioDef();
  }

}
