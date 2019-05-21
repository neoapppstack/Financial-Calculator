import { CorporateFormulaDefinationService } from './../../../_service/formula/corporate-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-cash-flow-to-equity',
  templateUrl: './free-cash-flow-to-equity.component.html',
  styleUrls: ['./free-cash-flow-to-equity.component.scss']
})
export class FreeCashFlowToEquityComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: CorporateFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getFreeCashFlowToEquityDef();
  }

}
