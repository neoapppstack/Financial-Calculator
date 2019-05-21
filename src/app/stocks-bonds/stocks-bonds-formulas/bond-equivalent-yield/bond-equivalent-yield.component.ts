import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinitionService } from '../../../_service/formula/stocks-bonds-definition.service';

@Component({
  selector: 'app-bond-equivalent-yield',
  templateUrl: './bond-equivalent-yield.component.html',
  styleUrls: ['./bond-equivalent-yield.component.scss']
})
export class BondEquivalentYieldComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: StocksBondsFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getBondEquivalentYieldDef();
  }

}
