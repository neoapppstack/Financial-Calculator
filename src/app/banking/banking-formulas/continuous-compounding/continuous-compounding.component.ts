import { BankingFormulaDefinationService } from './../../../_service/formula/banking-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continuous-compounding',
  templateUrl: './continuous-compounding.component.html',
  styleUrls: ['./continuous-compounding.component.scss']
})
export class ContinuousCompoundingComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: BankingFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getContinuousCompoundingDef();
  }

}
