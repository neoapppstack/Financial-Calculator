import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinationService } from './../../../_service/formula/stocks-bonds-defination.service';

@Component({
  selector: 'app-capital-gains-yield',
  templateUrl: './capital-gains-yield.component.html',
  styleUrls: ['./capital-gains-yield.component.scss']
})
export class CapitalGainsYieldComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: StocksBondsFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getCapitalGainsYielddDef();
  }

}
