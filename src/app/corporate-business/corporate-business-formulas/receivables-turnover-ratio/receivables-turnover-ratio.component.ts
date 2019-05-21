import { CorporateFormulaDefinitionService } from './../../../_service/formula/corporate-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receivables-turnover-ratio',
  templateUrl: './receivables-turnover-ratio.component.html',
  styleUrls: ['./receivables-turnover-ratio.component.scss']
})
export class ReceivablesTurnoverRatioComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: CorporateFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getReceivablesTurnoverRatioDef();
  }

}
