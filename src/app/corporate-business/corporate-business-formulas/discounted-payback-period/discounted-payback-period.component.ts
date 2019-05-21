import { CorporateFormulaDefinitionService } from './../../../_service/formula/corporate-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discounted-payback-period',
  templateUrl: './discounted-payback-period.component.html',
  styleUrls: ['./discounted-payback-period.component.scss']
})
export class DiscountedPaybackPeriodComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: CorporateFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getDiscountedPaybackPeriodDef();
  }

}
