import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinationService } from './../../../_service/formula/stocks-bonds-defination.service';

@Component({
  selector: 'app-tax-equivalent-yield',
  templateUrl: './tax-equivalent-yield.component.html',
  styleUrls: ['./tax-equivalent-yield.component.scss']
})
export class TaxEquivalentYieldComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: StocksBondsFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getTaxEquivalentYieldDef();
  }

}
