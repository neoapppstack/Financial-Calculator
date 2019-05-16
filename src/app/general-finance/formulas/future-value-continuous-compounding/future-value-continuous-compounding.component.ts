import { GeneralFormulaDefinationService } from './../../../_service/formula/general-formula-defination.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-future-value-continuous-compounding',
  templateUrl: './future-value-continuous-compounding.component.html',
  styleUrls: ['./future-value-continuous-compounding.component.scss']
})
export class FutureValueContinuousCompoundingComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: GeneralFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getFutureValueContinuousCompoundingDef();
  }

}
