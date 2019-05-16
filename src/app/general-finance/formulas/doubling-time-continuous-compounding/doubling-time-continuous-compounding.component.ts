import { GeneralFormulaDefinationService } from './../../../_service/formula/general-formula-defination.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-doubling-time-continuous-compounding',
  templateUrl: './doubling-time-continuous-compounding.component.html',
  styleUrls: ['./doubling-time-continuous-compounding.component.scss']
})
export class DoublingTimeContinuousCompoundingComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: GeneralFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getDoublingTimeContinuousCompoundingDef();
  }

}
