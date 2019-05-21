import { CorporateFormulaDefinationService } from './../../../_service/formula/corporate-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receivables-turnover-ratio',
  templateUrl: './receivables-turnover-ratio.component.html',
  styleUrls: ['./receivables-turnover-ratio.component.scss']
})
export class ReceivablesTurnoverRatioComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: CorporateFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getReceivablesTurnoverRatioDef();
  }

}
