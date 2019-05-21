import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';
import { StocksBondsFormulaDefinationService } from './../../../_service/formula/stocks-bonds-defination.service';

@Component({
  selector: 'app-deometric-mean-return',
  templateUrl: './deometric-mean-return.component.html',
  styleUrls: ['./deometric-mean-return.component.scss']
})
export class DeometricMeanReturnComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: StocksBondsFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getDeometricMeanReturnDef();
  }

}
