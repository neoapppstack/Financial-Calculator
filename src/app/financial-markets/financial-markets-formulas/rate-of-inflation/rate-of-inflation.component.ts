import { FinancialMarketFormulaDefinitionService } from '../../../_service/formula/financial-markets-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-of-inflation',
  templateUrl: './rate-of-inflation.component.html',
  styleUrls: ['./rate-of-inflation.component.scss']
})
export class RateOfInflationComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: FinancialMarketFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getRateOfInflationDef()
  }

}
