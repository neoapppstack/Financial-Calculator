import { CorporateFormulaDefinationService } from './../../../_service/formula/corporate-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-cash-flow-to-firm',
  templateUrl: './free-cash-flow-to-firm.component.html',
  styleUrls: ['./free-cash-flow-to-firm.component.scss']
})
export class FreeCashFlowToFirmComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: CorporateFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getFreeCashFlowToEquityDef();
  }

}
