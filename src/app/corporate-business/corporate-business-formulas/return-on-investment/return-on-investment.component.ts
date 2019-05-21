import { CorporateFormulaDefinationService } from './../../../_service/formula/corporate-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-on-investment',
  templateUrl: './return-on-investment.component.html',
  styleUrls: ['./return-on-investment.component.scss']
})
export class ReturnOnInvestmentComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: CorporateFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getReturnOnInvestmentDef();
  }

}
