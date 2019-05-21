import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinitionService } from '../../../_service/formula/stocks-bonds-definition.service';

@Component({
  selector: 'app-deometric-mean-return',
  templateUrl: './deometric-mean-return.component.html',
  styleUrls: ['./deometric-mean-return.component.scss']
})
export class DeometricMeanReturnComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: StocksBondsFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getDeometricMeanReturnDef();
  }

}
