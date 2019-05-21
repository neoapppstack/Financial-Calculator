import { BankingFormulaDefinationService } from './../../../_service/formula/banking-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annual-percentage-yield',
  templateUrl: './annual-percentage-yield.component.html',
  styleUrls: ['./annual-percentage-yield.component.scss']
})
export class AnnualPercentageYieldComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: BankingFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getAnnualPercentageYieldDef();
  }

}
