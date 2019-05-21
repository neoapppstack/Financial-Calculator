import { FinancialMarketFormulaDefinitionService } from '../../../_service/formula/financial-markets-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-real-rate-of-return',
  templateUrl: './real-rate-of-return.component.html',
  styleUrls: ['./real-rate-of-return.component.scss']
})
export class RealRateOfReturnComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: FinancialMarketFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getRealRateOfReturnDef();

  }

}
